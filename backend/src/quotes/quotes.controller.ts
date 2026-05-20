import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { AiService } from '../ai/ai.service';
import { SubmitQuoteDto } from './dto/submit-quote.dto';
import { SubmitQuoteResponse } from './dto/submit-quote-response.dto';
import { QUOTE_FORM_OPTIONS } from './quotes.config';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(
    private readonly quotesService: QuotesService,
    private readonly aiService: AiService,
  ) {}

  @Get()
  getAllQuotes() {
    return this.quotesService.findAll();
  }

  @Get('form-options')
  getFormOptions() {
    return QUOTE_FORM_OPTIONS;
  }

  @Get('random')
  async getRandomQuote() {
    const quote = await this.quotesService.findRandom();

    if (!quote) {
      throw new NotFoundException('No quotes found');
    }

    return quote;
  }

  @Post()
  async submitQuote(@Body() body: SubmitQuoteDto): Promise<SubmitQuoteResponse> {
    const pending = await this.quotesService.createPending({
      text: body.text,
      character: body.character,
      bookNumber: body.bookNumber,
      chapterNumber: body.chapterNumber,
    });

    const evaluation = await this.aiService.evaluateQuoteSubmission({
      text: body.text,
      character: body.character,
      bookNumber: body.bookNumber,
      chapterNumber: body.chapterNumber,
    });

    const status = QuotesService.mapEvaluationActionToStatus(
      evaluation.action,
    );
    const quote = await this.quotesService.updateStatus(pending.id, status);

    return {
      quote,
      reasoning: evaluation.reasoning,
    };
  }
}
