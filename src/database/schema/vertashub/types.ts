import { VERTASHUB } from "../schemas";

export const genderEnum = VERTASHUB.enum("gender", [
  "male",
  "female",
  "prefer_not_to_say"
]);
