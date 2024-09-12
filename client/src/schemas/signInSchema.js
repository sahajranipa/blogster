import * as z from "zod";

export const SignInSchema = z.object({
  email: z.string().email("Invalid Email.Your email must be a valid email."),
  password: z
    .string()
    .min(4, "Your password should not be less than 4 characters.")
    .max(20, "Your password should not be 20 characters long."),
});
