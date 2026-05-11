import { AchievementDto } from './dto/achievement.dto';
export declare class AiService {
    private readonly client;
    constructor();
    generateAchievement(trigger: string): Promise<AchievementDto>;
}
