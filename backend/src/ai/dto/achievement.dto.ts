import { IsNotEmpty, IsString } from 'class-validator';

export class AchievementDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  reward!: string;
}

/** Envelope returned by `POST /ai/achievement`. */
export type GenerateAchievementResponse = {
  achievement: AchievementDto;
};
