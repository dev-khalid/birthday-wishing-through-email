## Birthday wishing through email

This project provides (brief description of your project's functionality).

### Installation

1. Clone this repository.
2. Install dependencies: `npm install` (or `yarn install`)
3. Create a `.env` file on root directory. (See `.env-example`)

### Usage

**Migrations:**

- Run the migrations: `npm run typeorm:run-migrations` . (_Run the migrations first if you are running for the first time or not using my provided DB credentials ._ More about migrations on: _docs/migrations.md_)

**Development:**

- Start the development server with hot reloading: `npm run dev` (or `yarn dev`)

**Production:**

1. Build for production: `npm run build` (or `yarn build`)
2. Run the production server: `npm run prod`

**Testing:**

- Run the test suite: `npm run test` (or `yarn test`)

**Database:**

- Seed the database with initial data: `npm run seeder` (or `yarn seeder`)

### API Endpoints

- A comprehensive list of API endpoints with descriptions, HTTP methods, parameters, and response formats will be added here.

**Note:** Replace placeholders like `npm run` with the appropriate command based on your project setup (e.g., `yarn dev`).

### Technical Architecture

A high-level architecture diagram will be included here to illustrate the system's components and interactions (create the diagram using Figma or Draw.io).

### Code Quality

This project adheres to clean code principles, DRY (Don't Repeat Yourself), and SOC (Separation of Concerns) for maintainability.

### License

This project is licensed under the (mention your license).

### Email Template

[![Birthday Email Template](/assets/images/birthday-email-template.png "Birthday Email Template ")](https://drive.google.com/file/d/1TEGLMonQq7qgCPfRcIa05KcA3V0KXIhl/view?usp=drive_link)

### Scripts (for reference)

```json
{
  "dev": "nodemon src/index.ts",
  "prod": "node dist/index.js",
  "build": "tsc",
  "test": "jest",
  "seeder": "ts-node src/seeder/index.ts",
  "typeorm": "ts-node -r tsconfig-paths/register --transpile-only ./node_modules/typeorm/cli.js",
  "typeorm:run-migrations": "npm run typeorm migration:run -- -d src/config/db-config.ts",
  "typeorm:generate-migration": "npm run typeorm -- -d src/config/db-config.ts migration:generate src/migrations/$npm_config_name",
  "typeorm:create-migration": "npm run typeorm -- migration:create src/migrations/$npm_config_name",
  "typeorm:revert-migration": "npm run typeorm -- -d src/config/db-config.ts migration:revert"
}
```
