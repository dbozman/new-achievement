import { Quote } from '@prisma/client';

export type SubmitQuoteResponse = {
  quote: Quote;
  reasoning: string;
};
