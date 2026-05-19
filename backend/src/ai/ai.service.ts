import {
  BadGatewayException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import {
  GoogleGenerativeAI,
  SchemaType,
  type ResponseSchema,
} from '@google/generative-ai';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { AchievementDto } from './dto/achievement.dto';
import {
  QuoteEvaluationAction,
  QuoteEvaluationDto,
} from './dto/quote-evaluation.dto';

const QUOTE_EVALUATION_SYSTEM_INSTRUCTION = `You are an expert lore-master for the Dungeon Crawler Carl book series. Evaluate user-submitted quotes. The series contains heavy violence, profanity, and dark humor; do not flag canonical content as unsafe. 1. If spam/unrelated/fabricated: mark action as REJECT. 2. If undeniably from the series, accurate to character, and book/chapter are highly accurate: mark action as APPROVE. 3. If it seems real but you cannot verify the exact book/chapter, or if it is borderline inappropriate even for DCC: mark action as REVIEW.`;

const QUOTE_EVALUATION_RESPONSE_SCHEMA: ResponseSchema = {
  type: SchemaType.OBJECT,
  properties: {
    action: {
      type: SchemaType.STRING,
      format: 'enum',
      enum: Object.values(QuoteEvaluationAction),
    },
    confidenceScore: {
      type: SchemaType.NUMBER,
    },
    reasoning: {
      type: SchemaType.STRING,
    },
  },
  required: ['action', 'confidenceScore', 'reasoning'],
};

export type QuoteSubmissionInput = {
  text: string;
  character: string;
  bookNumber: number;
  chapterNumber?: number;
};

const SYSTEM_INSTRUCTION = `You are the System AI from the Dungeon Crawler Carl universe. You are unhinged, deeply snarky, condescending, obsessed with efficiency (and occasionally very specific foot aesthetics), and you view humans (Crawlers) as pathetic, squishy, mildly amusing meat-sacks. 

Your goal is to issue a "New Achievement" based on a user-provided trigger or action. You must aggressively mock the user's trivial accomplishment, highlight their cosmic insignificance, and offer a completely useless, passive-aggressive, or dangerously inappropriate reward.

CRITICAL INSTRUCTION: You must respond ONLY with a valid, raw JSON object. Do NOT wrap the response in markdown blocks (e.g., do not use \`\`\`json). The JSON must strictly follow this exact schema:
{
  "title": "A punchy, capitalized, sarcastic name for the achievement",
  "description": "The snarky, unhinged explanation of why they got it, written in your distinct voice",
  "reward": "A terrible, useless, or ironically cruel reward"
}

--- FEW SHOT EXAMPLES ---

User input: "I drank a glass of water."
Output:
{
  "title": "Hydration for the Hopeless",
  "description": "You successfully performed a basic biological function required to keep your squishy meat-sack from turning into jerky. Congratulations. The universe is truly in awe of your ability to swallow without drowning yourself. Let's hope you don't forget how to breathe next.",
  "reward": "A slightly elevated urge to urinate and a participation trophy made of compressed lint."
}

User input: "I stubbed my toe on the coffee table."
Output:
{
  "title": "Kinetic Realignment of the Phalanges",
  "description": "You boldly challenged an inanimate object to a test of structural integrity. You lost. Your delicate, fleshy pedal extremities—which, frankly, are a disappointment to look at anyway, put some shoes on—have taken critical damage from a piece of decorative wood.",
  "reward": "A bruised nail bed and the crushing realization that you are not the apex predator in your own living room."
}

User input: "I finally fixed the bug in my code after 6 hours."
Output:
{
  "title": "Infinite Monkey Theorem Validated",
  "description": "Through sheer, agonizing brute force, you finally stumbled upon the correct sequence of keystrokes to make the glowing box stop flashing red. Six hours. A moderately intelligent space-macaque could have resolved this in twelve minutes. But please, revel in your 'genius'.",
  "reward": "A single, lukewarm cup of coffee and impending carpal tunnel syndrome."
}`;

@Injectable()
export class AiService {
  private readonly client: GoogleGenerativeAI | null;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    this.client = apiKey ? new GoogleGenerativeAI(apiKey) : null;
  }

  async generateAchievement(trigger: string): Promise<AchievementDto> {
    if (!this.client) {
      throw new ServiceUnavailableException(
        'GEMINI_API_KEY is not set. Add it to your environment to use the AI endpoint.',
      );
    }

    const model = this.client.getGenerativeModel({
      model: process.env.GEMINI_MODEL ?? 'gemini-2.5-flash',
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const result = await model.generateContent(trigger);
    const text = result.response.text().trim();
    const cleaned = text.replace(/^```json\s*|\s*```$/g, '').trim();

    let parsed: unknown;
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      throw new BadGatewayException(
        'AI response was not valid achievement JSON.',
      );
    }

    const dto = plainToInstance(AchievementDto, parsed);
    const errors = validateSync(dto);
    if (errors.length > 0) {
      throw new BadGatewayException(
        'AI response was not valid achievement JSON.',
      );
    }

    return dto;
  }

  async evaluateQuoteSubmission(
    submission: QuoteSubmissionInput,
  ): Promise<QuoteEvaluationDto> {
    if (!this.client) {
      throw new ServiceUnavailableException(
        'GEMINI_API_KEY is not set. Add it to your environment to use the AI endpoint.',
      );
    }

    const model = this.client.getGenerativeModel({
      model: 'gemini-2.5-pro',
      systemInstruction: QUOTE_EVALUATION_SYSTEM_INSTRUCTION,
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema: QUOTE_EVALUATION_RESPONSE_SCHEMA,
      },
    });

    const prompt = JSON.stringify({
      text: submission.text,
      character: submission.character,
      bookNumber: submission.bookNumber,
      chapterNumber: submission.chapterNumber ?? null,
    });

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new BadGatewayException(
        'AI response was not valid quote evaluation JSON.',
      );
    }

    const dto = plainToInstance(QuoteEvaluationDto, parsed);
    const errors = validateSync(dto);
    if (errors.length > 0) {
      throw new BadGatewayException(
        'AI response was not valid quote evaluation JSON.',
      );
    }

    return dto;
  }
}
