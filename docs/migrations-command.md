## TypeORM Migration Commands

This document outlines three TypeORM migration commands commonly used to manage database schema changes:

**1. Generating a Migration File:**

* Command: `npm run typeorm:generate-migration --name=AddTestCodeToDiscrepancy`

This command creates a new migration file named `{TIMESTAMP}-AddTestCodeToDiscrepancy.ts` (or `.js` depending on your project setup) within your designated migrations directory. This file serves as a template for defining the database schema changes you intend to make.

**2. Running Pending Migrations:**

* Command: `npm run typeorm:run-migrations`

This command executes all pending migrations (i.e., those that haven't been applied to your database yet) in the order they were created. It reads the migration files, understands the defined changes, and applies them to your database schema.

**3. Creating an Empty Migration File (Optional):**

* Command: `npm run typeorm:create-migration --name=UpdateInspectionIdToUUID`

This command creates an empty migration file named `UpdateInspectionIdToUUID.ts` (or `.js`) within your migrations directory. This file doesn't contain any initial changes but provides a starting point for you to manually define the logic for updating the `inspectionId` column to a UUID data type.

**Important Notes:**

* Ensure you have TypeORM and the necessary dependencies installed in your project.
* Replace `--name` arguments with appropriate names reflecting your specific database schema changes.
* Refer to the TypeORM documentation for detailed information on migration options and advanced usage: https://orkhan.gitbook.io/typeorm/docs/migrations
* Refer to this beautiful linkedin blog for practial usage: https://www.linkedin.com/pulse/typeorm-migration-guide-buildbot-technologies-private-limi-napmc/
