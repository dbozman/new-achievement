# Cursor Prompts

## Step 1: Scaffold projects.

I am starting a new full-stack project. Please initialize an Angular workspace in a folder called frontend and a NestJS project in a folder called backend. Set up a single package.json at the root if necessary to manage both, or keep them strictly isolated, whichever is cleaner for local development. Ensure both projects build successfully.

### Step 1 Human steps

1. Verified backend was running by executing npm run start:dev
2. Verified frontend was running by executing npm start

## Step 2: Build the database

In the backend NestJS project, install and initialize Prisma using SQLite as the database provider. Create a schema with a Quote model. The Quote model should have an ID, the character's name, the quote text, an integer for the book number, and an integer for the chapter number. Generate the Prisma client and create a NestJS Prisma service to handle the database connection.

### Step 2 Human steps

npx prisma studio

## Step 3: Build backend

In the backend, create a RESTful resource (Controller and Service) for 'Quotes'. It should have a GET endpoint to fetch all quotes, a GET endpoint to fetch a random quote, and a POST endpoint to add a new quote to the database using the Prisma service.