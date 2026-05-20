import { Injectable } from '@nestjs/common';
import { Quote, QuoteStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { QuoteEvaluationAction } from '../ai/dto/quote-evaluation.dto';

export type CreatePendingQuoteInput = {
  character: string;
  text: string;
  bookNumber: number;
  chapterNumber?: number;
};

@Injectable()
export class QuotesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.quote.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findRandom() {
    const count = await this.prisma.quote.count();

    if (count === 0) {
      return null;
    }

    const randomOffset = Math.floor(Math.random() * count);
    const [quote] = await this.prisma.quote.findMany({
      skip: randomOffset,
      take: 1,
    });

    return quote;
  }

  createPending(data: CreatePendingQuoteInput): Promise<Quote> {
    return this.prisma.quote.create({
      data: {
        character: data.character,
        text: data.text,
        bookNumber: data.bookNumber,
        chapterNumber: data.chapterNumber,
        status: QuoteStatus.PENDING,
      },
    });
  }

  updateStatus(id: number, status: QuoteStatus): Promise<Quote> {
    return this.prisma.quote.update({
      where: { id },
      data: { status },
    });
  }

  static mapEvaluationActionToStatus(
    action: QuoteEvaluationAction,
  ): QuoteStatus {
    switch (action) {
      case QuoteEvaluationAction.APPROVE:
        return QuoteStatus.APPROVED;
      case QuoteEvaluationAction.REJECT:
        return QuoteStatus.REJECTED;
      case QuoteEvaluationAction.REVIEW:
        return QuoteStatus.REVIEW;
    }
  }
}
