import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class SubmitQuoteDto {
  @IsString()
  @IsNotEmpty()
  text!: string;

  @IsString()
  @IsNotEmpty()
  character!: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  bookNumber!: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  chapterNumber?: number;
}
