"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const generative_ai_1 = require("@google/generative-ai");
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
let AiService = class AiService {
    client;
    constructor() {
        const apiKey = process.env.GEMINI_API_KEY;
        this.client = apiKey ? new generative_ai_1.GoogleGenerativeAI(apiKey) : null;
    }
    async generateAchievement(trigger) {
        if (!this.client) {
            throw new common_1.ServiceUnavailableException('GEMINI_API_KEY is not set. Add it to your environment to use the AI endpoint.');
        }
        const model = this.client.getGenerativeModel({
            model: process.env.GEMINI_MODEL ?? 'gemini-2.5-flash',
            systemInstruction: SYSTEM_INSTRUCTION,
        });
        const result = await model.generateContent(trigger);
        const text = result.response.text().trim();
        const cleaned = text.replace(/^```json\s*|\s*```$/g, '').trim();
        try {
            const parsed = JSON.parse(cleaned);
            if (typeof parsed.title !== 'string' ||
                typeof parsed.description !== 'string' ||
                typeof parsed.reward !== 'string') {
                throw new Error('Invalid schema');
            }
            return {
                title: parsed.title,
                description: parsed.description,
                reward: parsed.reward,
            };
        }
        catch {
            throw new common_1.BadGatewayException('AI response was not valid achievement JSON.');
        }
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AiService);
//# sourceMappingURL=ai.service.js.map