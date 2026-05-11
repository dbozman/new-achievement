import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class GenerateAchievementDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim() : value,
  )
  @IsString()
  @IsNotEmpty({ message: 'trigger is required (non-empty string)' })
  trigger!: string;
}
