import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  logging: true,
  synchronize: false,
  migrationsTableName: "custom_migration_table",
});

export default AppDataSource;
