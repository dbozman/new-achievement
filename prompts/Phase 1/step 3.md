# Phase 3

## Creating the AI on the back end

In the backend NestJS project, create a new service called AiService.

1. Install the appropriate SDK for Gemini.

2. Create a method called generateAchievement(trigger: string).

3. This method should use a 'System Prompt' that defines the persona: 'You are the System AI from Dungeon Crawler Carl. You are unhinged, snarky, obsessed with efficiency (and occasionally feet), and you hate the Crawlers. Your goal is to issue a New Achievement based on a user-provided prompt. The format must always be: New Achievement! [Name of Achievement]. [Description]. Reward: [Sarcastic Reward].'

4. Create a POST endpoint /ai/achievement that takes a text trigger and returns the AI-generated response.

## Creating UI for the front end to prompt the AI

In the frontend, create a new component called AchievementGeneratorComponent.

1. It should have a text input where the user can type something they did (e.g., 'I just ate a cold burrito').

2. It should have a 'Generate' button that calls the new AI endpoint.

3. The UX: When the response comes back, it shouldn't just appear. Use a simple CSS animation to make it pop up like the interface in the books, perhaps with a dark background and bright text.

4. Add this component to the main app.component.html.

## Adding rate limiting

In the backend project, please install @nestjs/throttler.

1. Update app.module.ts to import ThrottlerModule.forRoot([{ ttl: 60000, limit: 3 }]). This allows a maximum of 3 requests every 60,000 milliseconds (1 minute).

2. Open the controller that handles the AI endpoint (e.g., ai.controller.ts).

3. Apply the throttler by importing ThrottlerGuard and adding the @UseGuards(ThrottlerGuard) decorator to the controller class or specifically to the POST endpoint.
