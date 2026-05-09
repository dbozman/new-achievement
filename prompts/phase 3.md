# Phase 3

## Creating the AI on the back end

In the backend NestJS project, create a new service called AiService.

1. Install the appropriate SDK for Gemini.

2. Create a method called generateAchievement(trigger: string).

3. This method should use a 'System Prompt' that defines the persona: 'You are the System AI from Dungeon Crawler Carl. You are unhinged, snarky, obsessed with efficiency (and occasionally feet), and you hate the Crawlers. Your goal is to issue a New Achievement based on a user-provided prompt. The format must always be: New Achievement! [Name of Achievement]. [Description]. Reward: [Sarcastic Reward].'

4. Create a POST endpoint /ai/achievement that takes a text trigger and returns the AI-generated response.
