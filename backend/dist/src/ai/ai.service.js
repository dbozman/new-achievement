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
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const achievement_dto_1 = require("./dto/achievement.dto");
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
        let parsed;
        try {
            parsed = JSON.parse(cleaned);
        }
        catch {
            throw new common_1.BadGatewayException('AI response was not valid achievement JSON.');
        }
        const dto = (0, class_transformer_1.plainToInstance)(achievement_dto_1.AchievementDto, parsed);
        const errors = (0, class_validator_1.validateSync)(dto);
        if (errors.length > 0) {
            throw new common_1.BadGatewayException('AI response was not valid achievement JSON.');
        }
        return dto;
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AiService);
//# sourceMappingURL=ai.service.js.map