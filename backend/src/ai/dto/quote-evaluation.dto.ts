import { IsEnum, IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export enum QuoteEvaluationAction {
  APPROVE = 'APPROVE',
  REJECT = 'REJECT',
  REVIEW = 'REVIEW',
}

export class QuoteEvaluationDto {
  @IsEnum(QuoteEvaluationAction)
  action!: QuoteEvaluationAction;

  @IsNumber()
  @Min(0)
  @Max(1)
  confidenceScore!: number;

  @IsString()
  @IsNotEmpty()
  reasoning!: string;
}
