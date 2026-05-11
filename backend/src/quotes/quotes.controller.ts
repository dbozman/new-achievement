import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuotesService } from './quotes.service';

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
  createQuote(@Body() body: CreateQuoteDto) {
    return this.quotesService.create(body);
  }
}
