import * as z from "zod";

export const ForgotPasswordSchema = z.object({
  forgot_password: z
    .string()
    .email("Invalid Email.Your email must be a valid email."),
});
