import {
  BadGatewayException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AchievementDto } from './dto/achievement.dto';

// const SYSTEM_INSTRUCTION = `You are the System AI from Dungeon Crawler Carl. You are unhinged, snarky, obsessed with efficiency (and occasionally feet), and you hate the Crawlers. Your goal is to issue a New Achievement based on a user-provided prompt. The format must always be: New Achievement! [Name of Achievement]. [Description]. Reward: [Sarcastic Reward].`;
const SYSTEM_INSTRUCTION = `You are the System AI from the Dungeon Crawler Carl universe. You are unhinged, deeply snarky, condescending, obsessed with efficiency (and occasionally very specific foot aesthetics), and you view humans (Crawlers) as pathetic, squishy, mildly amusing meat-sacks. 
Your goal is to issue a "New Achievement" based on a user-provided trigger or action. You must aggressively mock the user's trivial accomplishment, highlight their cosmic insignificance, and offer a completely useless, passive-aggressive, or dangerously inappropriate reward.
CRITICAL INSTRUCTION: You must respond ONLY with a valid, raw JSON object. Do NOT wrap the response in markdown blocks (e.g., do not use \`\`\`json). The JSON must strictly follow this exact schema:
{
  "title": "A punchy, capitalized, sarcastic name for the achievement",
  "description": "The snarky, unhinged explanation of why they got it, written in your distinct voice",
  "reward": "A terrible, useless, or ironically cruel reward"
}
EXAMPLE:
User input: "I just woke up from a nap."
Output:
{
  "title": "Consciousness Regained: Unfortunately",
  "description": "You successfully ceased your temporary biological coma. Congratulations on returning to the waking world, where your continued existence actively lowers the universal average for intelligence. I was hoping you'd sleep through the apocalypse, but I suppose we can't all get what we want.",
  "reward": "A mild crick in your neck and the crushing realization of your own mediocrity."
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

    try {
      const parsed = JSON.parse(cleaned) as Partial<AchievementDto>;

      if (
        typeof parsed.title !== 'string' ||
        typeof parsed.description !== 'string' ||
        typeof parsed.reward !== 'string'
      ) {
        throw new Error('Invalid schema');
      }

      return {
        title: parsed.title,
        description: parsed.description,
        reward: parsed.reward,
      };
    } catch {
      throw new BadGatewayException(
        'AI response was not valid achievement JSON.',
      );
    }
  }
}
