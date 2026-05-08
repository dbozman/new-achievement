import { QuotesService } from './quotes.service';
import type { CreateQuoteInput } from './quotes.service';
export declare class QuotesController {
    private readonly quotesService;
    constructor(quotesService: QuotesService);
    getAllQuotes(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        character: string;
        text: string;
        bookNumber: number;
        chapterNumber: number;
    }[]>;
    getRandomQuote(): Promise<{
        id: number;
        character: string;
        text: string;
        bookNumber: number;
        chapterNumber: number;
    }>;
    createQuote(body: CreateQuoteInput): import("../generated/prisma/models").Prisma__QuoteClient<{
        id: number;
        character: string;
        text: string;
        bookNumber: number;
        chapterNumber: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
