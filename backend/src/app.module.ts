import { Module } from '@nestjs/common';
import { AiModule } from './ai/ai.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [PrismaModule, QuotesModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
