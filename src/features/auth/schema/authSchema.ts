import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().nonempty("Username cannot be blank").min(5, "Username must contain atleast 5 characters").max(16),
  password: z.string().nonempty("Password cannot be blank").min(8, "Password must contain atleast 8 characters").max(16),
});

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});