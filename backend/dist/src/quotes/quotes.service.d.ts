import { PrismaService } from '../prisma/prisma.service';
export type CreateQuoteInput = {
    character: string;
    text: string;
    bookNumber: number;
    chapterNumber: number;
};
export declare class QuotesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        character: string;
        text: string;
        bookNumber: number;
        chapterNumber: number;
    }[]>;
    findRandom(): Promise<{
        id: number;
        character: string;
        text: string;
        bookNumber: number;
        chapterNumber: number;
    } | null>;
    create(data: CreateQuoteInput): import("../generated/prisma/models").Prisma__QuoteClient<{
        id: number;
        character: string;
        text: string;
        bookNumber: number;
        chapterNumber: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
