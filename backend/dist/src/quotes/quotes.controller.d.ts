import { QuotesService } from './quotes.service';
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
}
