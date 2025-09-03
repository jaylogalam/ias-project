import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(5, "Must contain atleast 5 characters").max(16),
  password: z.string().min(5, "Must contain atleast 5 characters").max(16),
});

export const loginSchema = z.object({
  username: z.string().min(5, "Must contain atleast 5 characters").max(16),
  password: z.string().min(5, "Must contain atleast 5 characters").max(16),
});