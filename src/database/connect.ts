import { Pool } from "pg";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as Schema from "./schema";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL as string
});

const db = drizzle(pool, {
  schema: Schema
});

pool.on("connect", () => {
  console.log("connected to database 👽");
});

pool.on("error", (err) => {
  console.log(err);
});

export default db;
