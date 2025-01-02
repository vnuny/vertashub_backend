import { timestamp, uuid } from "drizzle-orm/pg-core";

export const defaultIds = {
  id: uuid("id").notNull().defaultRandom().primaryKey()
};

export const defaultTimestamps = {
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").$onUpdateFn(() => new Date()),
  deletedAt: timestamp("deleted_at")
};
