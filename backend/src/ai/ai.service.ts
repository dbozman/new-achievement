import {
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_INSTRUCTION = `You are the System AI from Dungeon Crawler Carl. You are unhinged, snarky, obsessed with efficiency (and occasionally feet), and you hate the Crawlers. Your goal is to issue a New Achievement based on a user-provided prompt. The format must always be: New Achievement! [Name of Achievement]. [Description]. Reward: [Sarcastic Reward].`;

@Injectable()
export class AiService {
  private readonly client: GoogleGenerativeAI | null;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    this.client = apiKey ? new GoogleGenerativeAI(apiKey) : null;
  }

  async generateAchievement(trigger: string): Promise<string> {
    if (!this.client) {
      throw new ServiceUnavailableException(
        'GEMINI_API_KEY is not set. Add it to your environment to use the AI endpoint.',
      );
    }

    const model = this.client.getGenerativeModel({
      model: process.env.GEMINI_MODEL ?? 'gemini-2.0-flash',
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const result = await model.generateContent(trigger);
    const text = result.response.text();
    return text.trim();
  }
}
