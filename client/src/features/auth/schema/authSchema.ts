import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .nonempty("Username cannot be blank")
    .min(5, "Username too short")
    .max(16),
  password: z
    .string()
    .nonempty()
    .min(8)
    .max(16)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/[0-9]/)
    .regex(/[^A-Za-z0-9]/),
});

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});
