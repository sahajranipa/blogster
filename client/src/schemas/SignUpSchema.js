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
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: z
    .string()
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }),
});
