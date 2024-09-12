import * as z from "zod";

export const ProfileSchema = z.object({
  bio: z.string().min(1, "Bio must not be empty."),
  web_site_link: z.string().url("Invalid URL.Your URL must be a valid URL."),
  location: z.string().min(1, "Location must not be empty."),
  email: z.string().email("Invalid Email.Your email must be a valid email."),
});
