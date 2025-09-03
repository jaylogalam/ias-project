import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .nonempty("Username cannot be blank")
    .min(5, "Too short")
    .max(16),
  password: z
    .string()
    .nonempty("Password cannot be blank")
    .min(8, "Password too short")
    .max(16)
    .regex(/[A-Z]/, "one uppercase letter")
    .regex(/[a-z]/, "one lowercase letter")
    .regex(/[0-9]/, "one number")
    .regex(/[^A-Za-z0-9]/, "one special character"),
});

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});