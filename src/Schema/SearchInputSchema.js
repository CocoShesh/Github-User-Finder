import { z } from "zod";
import { UserInput } from "../Api/UserInput";

const getUserInput = async searchInput => {
  try {
    return await UserInput(searchInput);
  } catch (error) {
    throw new Error(error);
  }
};

export const userInputSchema = z.object({
  search: z
    .string()
    .refine(value => value.trim().length > 0, {
      message: "Search input cannot be empty.",
    })
    .refine(
      async value => {
        try {
          await getUserInput(value);
          return true;
        } catch (error) {
          return false;
        }
      },
      {
        message: "User not found.",
      }
    ),
});
