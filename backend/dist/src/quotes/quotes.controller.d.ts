import { CreateQuoteDto } from './dto/create-quote.dto';
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
    createQuote(body: CreateQuoteDto): import("../generated/prisma/models").Prisma__QuoteClient<{
        character: string;
        text: string;
        bookNumber: number;
        chapterNumber: number;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
