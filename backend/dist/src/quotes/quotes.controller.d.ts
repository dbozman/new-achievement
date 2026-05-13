import { QuotesService } from './quotes.service';
export declare class QuotesController {
    private readonly quotesService;
    constructor(quotesService: QuotesService);
    getAllQuotes(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        character: string;
        text: string;
        bookNumber: number;
        chapterNumber: number;
        id: number;
    }[]>;
    getRandomQuote(): Promise<{
        character: string;
        text: string;
        bookNumber: number;
        chapterNumber: number;
        id: number;
    }>;
}
