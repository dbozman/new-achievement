# Overall Objective

The core site is built. Now I want to expand on it, specifically I want to expand on the quotes section. Ultimately, I want to allow users to suggest new quotes from Dungeon Crawler Carl to the library of quotes, and for anyone to vote on their favorite quotes. I'm going to enhance the viewing of quotes with sorting functionality.

I have this broken out into 3 parts.

1. Quote Submission
2. Enhanced Quote Viewing
3. Voting

I'll give instructions for each of these parts individually. Tell me when you're ready for #1.

## Part 1: Quote Submission

My concern is someone could submit anythng they want including things that are not part of the books or super inappropriate things. The problem is that the books are frequently "inapproropriate" so we need to focus on making sure its a quote from the book. I want the user to fill out the form to submit the quote. That submission should go to an AI workflow that I'd like to build with Gemini (open to suggestions). The workflow should evaluate the submission. If it's clearly garbage, discard it. If it sounds legit, verify it's part of the book with correct book and chapter values, then persist it. If the AI isnt' sure about it, it should send it to me for review.

## Part 2: Enhanced Quote Viewing

I want the quotes to be filterable by book and character, and when displayed they should be ordered by chaper.

## Part 3: Voting

I want people to be able to vote on their favorite quotes. But I haven't decided exactly what I want to do. For instance, can anyone vote as many times as they want for as many quotes as they want? Does everyone get maybe 5 votes per book? I don't know yet. i'll want you to help me tackle that when we get there.

yamabiko.proxy.rlwy.net:58430

5432