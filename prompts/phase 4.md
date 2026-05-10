# Phase 4

## Make it look pretty - install material
In the frontend project, please install Angular Material.

1. Set up a global Dark Theme for the entire application.

2. Implement a monospace font across the site to make it feel like a terminals (e.g., 'Courier New' or 'Fira Code').

3. Add an image from the Dungeon Crawler Carl universe as a semi-transparent, subtle background texture, or use a dark, rocky/metallic texture for the main application panels.

## style elements

In the frontend project, please update the HTML for QuoteListComponent and AddQuoteComponent.

1. Use mat-card for individual quotes, perhaps with green or blue glowing borders.

2. Use mat-table for the main list of quotes.

3. Use mat-form-field and standard Angular Material form controls for the input form.

4. Restyle the 'Vote' (or other) buttons using mat-raised-button, perhaps with the System AI color scheme (deep reds and blacks).

## add animations

In the frontend project, navigate to the AchievementGeneratorComponent.

1. We want a complex animation for when the achievement content arrives from the API.

2. First, the browser should briefly flash the screen red or give a static-glitch effect.

3. Then, the full text of the achievement (Name, Description, Reward) should slide/fade into the center of the screen, staying there until a 'Dismiss' button is clicked.

4. While the achievement is displayed, the rest of the site (the quote list, the input form) should be blurred or grayed out.