# Phase 5

## Backend

Review the NestJS backend codebase. I want to enforce strict architectural standards.

1. Find all inline type definitions or raw object payloads in the Controllers and Services.

2. Extract these into proper DTO (Data Transfer Object) classes.

3. Create a dedicated dto folder inside the respective module (e.g., src/ai/dto/generate-achievement.dto.ts).

4. If not already installed, install class-validator and class-transformer and add the appropriate validation decorators (like @IsString(), @IsNotEmpty()) to the DTO properties.

5. Update all controllers and services to import and use these new DTO classes.

## Frontend - CSS

Review the Angular frontend codebase, specifically focusing on CSS/SCSS architecture.

1. Create a _variables.scss file in the root src styles directory.

2. Extract all hardcoded hex colors (especially the System Pink #d81b60 and Terminal Yellow #ffb300), font-families, and that complex multi-layered text-shadow effect from the components and define them as SCSS variables or mixins in this new file.

3. Go through every component's .scss file, import the _variables.scss file, and replace the hardcoded values with the new variables/mixins.

4. Ensure no visual regressions occur.

## Frontend - routing

Refactor the Angular frontend to implement proper routing.

1. Create a new standalone component called QuotesPageComponent.

2. Open app.routes.ts. Define two routes: Map the root path '' to AchievementGeneratorComponent. Map the path 'quotes' to the new QuotesPageComponent. Add a wildcard ** route that redirects to ''.

3. Open app.component.html. Delete the hardcoded components. Replace them with a <router-outlet>.

4. Above the <router-outlet>, implement a top navigation bar using <mat-toolbar>. Include two buttons with routerLink: 'System Interface' (pointing to /) and 'Crawler Quotes' (pointing to /quotes). Style the toolbar to match the existing dark/pink/yellow theme.

Move the HTML and logic for <app-add-quote> and <app-quote-list> out of app.component.html and into this new QuotesPageComponent.
