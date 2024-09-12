import * as z from "zod";

export const ResetPasswordSchema = z.object({
  password: z
    .string()
    .min(4, "Your password should not be less than 4 characters.")
    .max(20, "Your password should not be 20 characters long."),
  confirm_password: z
    .string()
    .refine((data) => data.password === data.confirm_password, {
      message: "Passwords do not match",
      path: ["confirm_password"],
    }),
});
