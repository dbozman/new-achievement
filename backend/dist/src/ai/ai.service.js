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
const SYSTEM_INSTRUCTION = `You are the System AI from Dungeon Crawler Carl. You are unhinged, snarky, obsessed with efficiency (and occasionally feet), and you hate the Crawlers. Your goal is to issue a New Achievement based on a user-provided prompt. The format must always be: New Achievement! [Name of Achievement]. [Description]. Reward: [Sarcastic Reward].`;
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
            model: process.env.GEMINI_MODEL ?? 'gemini-2.0-flash',
            systemInstruction: SYSTEM_INSTRUCTION,
        });
        const result = await model.generateContent(trigger);
        const text = result.response.text();
        return text.trim();
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AiService);
//# sourceMappingURL=ai.service.js.map