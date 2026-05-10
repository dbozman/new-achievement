import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { AiService } from './ai.service';

@Controller('ai')
@UseGuards(ThrottlerGuard)
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('achievement')
  async createAchievement(
    @Body() body: { trigger?: string },
  ): Promise<{ achievement: string }> {
    const trigger = body?.trigger?.trim();
    if (!trigger) {
      throw new BadRequestException('trigger is required (non-empty string)');
    }
    const achievement = await this.aiService.generateAchievement(trigger);
    return { achievement };
  }
}
