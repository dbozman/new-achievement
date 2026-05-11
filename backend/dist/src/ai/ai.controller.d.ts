import { GenerateAchievementResponse } from './dto/achievement.dto';
import { GenerateAchievementDto } from './dto/generate-achievement.dto';
import { AiService } from './ai.service';
export declare class AiController {
    private readonly aiService;
    constructor(aiService: AiService);
    createAchievement(body: GenerateAchievementDto): Promise<GenerateAchievementResponse>;
}
