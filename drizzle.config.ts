import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./src/database/schema",
  dbCredentials: {
    url: process.env.POSTGRES_URL as string
  }
});
