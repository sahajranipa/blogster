import * as z from "zod";

export const SignUpSchema = z.object({
  fullName: z
    .string()
    .min(5, "Full Name must not be less than 5 characters.")
    .max(25, "Full Name must not be grater than 25 characters long.")
    .regex(
      /^[a-zA-Z0-9_]+$/,

      "The Full Name must contain only letters, numbers and underscore (_)."
    ),
  email: z.string().email("Invalid Email.Your email must be a valid email."),
  password: z
    .string()
    .min(4, "Your password should not be less than 4 characters.")
    .max(20, "Your password should not be 20 characters long."),
  confirmPassword: z
    .string()
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }),
});
