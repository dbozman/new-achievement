-- CreateEnum
CREATE TYPE "QuoteStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'REVIEW');

-- AlterTable
ALTER TABLE "Quote" ADD COLUMN "status" "QuoteStatus" NOT NULL DEFAULT 'PENDING',
ALTER COLUMN "chapterNumber" DROP NOT NULL;
