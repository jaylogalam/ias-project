// hooks/useLoginForm.ts
import { useRef, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema/authSchema";
import { useMutation } from "@tanstack/react-query";

type FormFields = z.infer<typeof loginSchema>;

export function useLoginForm() {
  const passwordInput = useRef<HTMLInputElement>(null);
  const [lockAccount, setLockAccount] = useState(false);
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  // Create form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    getValues,
  } = useForm<FormFields>({ resolver: zodResolver(loginSchema) });

  // Fetch Request
  const fetchLoginRequest = async (account: FormFields) => {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(account),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    return { data };
  };

  // Lock account
  const setAccountStatus = async ({
    username,
    status,
  }: {
    username: string;
    status: 0 | 1;
  }) => {
    try {
      const res = await fetch("http://localhost:5000/api/setStatus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, status }),
      });

      if (!res.ok) {
        const error = await res.json();
        console.error("Failed to set account status:", error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Results
  const mutation = useMutation({
    mutationFn: fetchLoginRequest,
    onSuccess: () => {
      alert("Login successful!");
    },
    onError: (err: any) => {
      switch (err.message) {
        case "Username does not exist":
          setError("username", {
            message: "Username does not exist",
          });
          break; 
        
        case "Account is locked. Please try again later":
          alert("Account locked. Please try again later.")
          break;
        
        case "Incorrect password":
          if (attemptsCount === 2) {
            setError("password", {
              message: "Too many attempts. Please try again later.",
            });
            const username = getValues("username");
            setAccountStatus({ username: username, status: 1 });
            setTimeout(async () => {
              await setAccountStatus({ username: username, status: 0 });
              setAttemptsCount(0);
            }, 5000);
          } else {
            setAttemptsCount(attemptsCount + 1);
            setError("password", { message: err.message });
          }
          break;

        default:
          console.log(err.message)
      }

      // if (err.message === "Incorrect password") {
      //   if (attemptsCount === 2) {
      //     setError("password", {
      //       message: "Too many attempts. Please try again later.",
      //     });
      //     const username = getValues("username");
      //     setAccountStatus({ username: username, status: 1 });
      //     setTimeout(() => {
      //       setAccountStatus({ username: username, status: 0 });
      //       setAttemptsCount(0);
      //     }, 5000);
      //   } else {
      //     setAttemptsCount(attemptsCount + 1);
      //     setError("password", { message: err.message });
      //   }
      // } else {
      //   setError("username", { message: err.message });
      // }
    },
  });

  // Submit form
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    mutation.mutate(data);
    
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    passwordInput,
    showPassword,
    setShowPassword,
    lockAccount,
  };
}
