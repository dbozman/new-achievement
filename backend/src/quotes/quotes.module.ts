import { Module } from '@nestjs/common';
import { AiModule } from '../ai/ai.module';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';

@Module({
  imports: [AiModule],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class QuotesModule {}
