import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateQuoteDto {
  @IsString()
  @IsNotEmpty()
  character!: string;

  @IsString()
  @IsNotEmpty()
  text!: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  bookNumber!: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  chapterNumber!: number;
}
