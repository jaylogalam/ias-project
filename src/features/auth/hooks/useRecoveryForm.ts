import type z from "zod";
import { signupSchema } from "../schema/authSchema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import zxcvbn from "zxcvbn";
import { useState } from "react";

type FormFields = z.infer<typeof signupSchema>;

export default function useRecoveryForm() {
  const navigate = useNavigate();
  const [strength, setStrength] = useState(0);

  // Check Password strength
  const checkStrength = (password: string) => {
    const strength = zxcvbn(password).score;
    setStrength(strength);
  };

  // Create form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    setValue,
  } = useForm<FormFields>({
    resolver: zodResolver(signupSchema),
    criteriaMode: "firstError",
    shouldFocusError: true,
  });

  // Fetch request
  const fetchSignupRequest = async (account: FormFields) => {
    const res = await fetch("http://localhost:5000/api/recovery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(account),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error);
    }

    return res.json();
  };

  // Results
  const mutation = useMutation({
    mutationFn: fetchSignupRequest,
    onSuccess: () => {
      alert("Account recovered successfully");
      navigate("/");
    },
    onError: (err: any) => {
      setError("username", {
        message: err.message,
      });
    },
  });

  // Submit form
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    mutation.mutate(data);
  };

  return {
    strength,
    checkStrength,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
}
