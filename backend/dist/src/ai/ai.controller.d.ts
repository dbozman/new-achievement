import { AchievementDto } from './dto/achievement.dto';
import { AiService } from './ai.service';
export declare class AiController {
    private readonly aiService;
    constructor(aiService: AiService);
    createAchievement(body: {
        trigger?: string;
    }): Promise<{
        achievement: AchievementDto;
    }>;
}
