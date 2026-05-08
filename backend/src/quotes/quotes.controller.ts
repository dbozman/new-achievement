import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { QuotesService } from './quotes.service';
import type { CreateQuoteInput } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  getAllQuotes() {
    return this.quotesService.findAll();
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
  createQuote(@Body() body: CreateQuoteInput) {
    return this.quotesService.create(body);
  }
}
