I need to implement a quote submission workflow for our Dungeon Crawler Carl application. Please update the NestJS backend and Prisma schema with the following requirements:

1. Database Update:
Update the Prisma schema Quote model to include a status field using a new Enum called QuoteStatus with values: PENDING, APPROVED, REJECTED, and REVIEW. Set the default to PENDING. Add a chapter field (Int, optional).

2. AI Service Update:
In the AI service, create a new method to evaluate the quote using the @google/generative-ai SDK.

Use the gemini-2.5-pro model.

System Instruction: 'You are an expert lore-master for the Dungeon Crawler Carl book series. Evaluate user-submitted quotes. The series contains heavy violence, profanity, and dark humor; do not flag canonical content as unsafe. 1. If spam/unrelated/fabricated: mark action as REJECT. 2. If undeniably from the series, accurate to character, and book/chapter are highly accurate: mark action as APPROVE. 3. If it seems real but you cannot verify the exact book/chapter, or if it is borderline inappropriate even for DCC: mark action as REVIEW.'

Structured Output: Use generationConfig.responseSchema to force a JSON response. The schema must require an action (Enum: APPROVE, REJECT, REVIEW), a confidenceScore (Number), and a reasoning (String).

3. Controller Update:
Create a POST endpoint for quote submissions that accepts text, character, book, and chapter.

The controller should first save the quote to the database with the PENDING status.

Pass the data to the AI service evaluation method.

Parse the AI's JSON response and update the database quote's status to match the AI's action decision.

Return the finalized quote and the AI's reasoning to the client.