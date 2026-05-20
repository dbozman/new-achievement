# Phase 6

## CI/CD

Implement standard Angular environment files to handle API routing.

1. Create a src/environments folder.

2. Inside it, create two files: environment.development.ts and environment.ts (this serves as the production file in modern Angular).

3. In environment.development.ts, export a constant: export const environment = { production: false, apiUrl: 'http://localhost:3000' };

4. In environment.ts, export the production constant: export const environment = { production: true, apiUrl: 'https://YOUR-ACTUAL-RAILWAY-BACKEND-URL.up.railway.app' }; (Use the real backend URL).

5. Review all Angular Services (like quote or achievement services). Replace any hardcoded http://localhost:3000 or production URLs with environment.apiUrl.

6. Ensure the services import the environment object from the standard environment.ts file, NOT the development one. Angular's build system will automatically swap the file at compile time.
