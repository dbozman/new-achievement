import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export type CreateQuoteInput = {
  character: string;
  text: string;
  bookNumber: number;
  chapterNumber: number;
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

  create(data: CreateQuoteInput) {
    return this.prisma.quote.create({
      data,
    });
  }
}
