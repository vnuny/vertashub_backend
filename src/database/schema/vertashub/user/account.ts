import { index, varchar } from "drizzle-orm/pg-core";
import { defaultIds, defaultTimestamps } from "../../repetions";
import { VERTASHUB } from "../../schemas";
import { genderEnum } from "../types";

export const accountsTable = VERTASHUB.table(
  "accounts",
  {
    ...defaultIds,
    email: varchar("email", { length: 255 }).notNull(),
    gender: genderEnum("gender").default("prefer_not_to_say").notNull(),
    ...defaultTimestamps
  },
  (t) => {
    return {
      emailIdx: index("email_idx_on_accounts").on(t.email)
    };
  }
);

export default accountsTable;
