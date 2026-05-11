import { PrismaService } from '../prisma/prisma.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
export declare class QuotesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        character: string;
        text: string;
        bookNumber: number;
        chapterNumber: number;
        id: number;
    }[]>;
    findRandom(): Promise<{
        character: string;
        text: string;
        bookNumber: number;
        chapterNumber: number;
        id: number;
    } | null>;
    create(data: CreateQuoteDto): import("../generated/prisma/models").Prisma__QuoteClient<{
        character: string;
        text: string;
        bookNumber: number;
        chapterNumber: number;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
