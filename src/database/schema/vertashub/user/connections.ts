import { jsonb, uuid } from "drizzle-orm/pg-core";
import { defaultIds, defaultTimestamps } from "../../repetions";
import { VERTASHUB } from "../../schemas";
import accountsTable from "./account";

export const connectionsTable = VERTASHUB.table("connections", {
  ...defaultIds,
  accountId: uuid("account_id")
    .references(() => accountsTable.id, {
      onDelete: "cascade"
    })
    .notNull(),
  credentials: jsonb("credentials")
    .default({
      type: "instagram"
    })
    .notNull(),
  ...defaultTimestamps
});

export default connectionsTable;
