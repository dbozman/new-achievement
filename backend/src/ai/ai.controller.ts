import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { GenerateAchievementResponse } from './dto/achievement.dto';
import { GenerateAchievementDto } from './dto/generate-achievement.dto';
import { AiService } from './ai.service';

@Controller('ai')
@UseGuards(ThrottlerGuard)
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('achievement')
  async createAchievement(
    @Body() body: GenerateAchievementDto,
  ): Promise<GenerateAchievementResponse> {
    const achievement = await this.aiService.generateAchievement(body.trigger);
    return { achievement };
  }
}
