import { useForm } from "react-hook-form";
import { signupSchema } from "../../schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

type FormFields = z.infer<typeof signupSchema>;

export default function useAuthForm() {
  return useForm<FormFields>({
    resolver: zodResolver(signupSchema),
    criteriaMode: "all",
  });
}
