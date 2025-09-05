import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schema/authSchema";
import { fetchLoginRequest } from "../../../../data/local/fetchLoginRequest";
import { cn } from "@/utils/twMerge";
import Eyes from "@/components/eyes";
import { useRef, useState } from "react";

type FormFields = z.infer<typeof loginSchema>;

function LoginFormFields() {
  const passwordInput = useRef<HTMLInputElement>(null);
  const [lockAccount, setLockAccount] = useState(false);
  const [attempsCount, setAttemptsCount] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const loginMutation = fetchLoginRequest();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormFields>({ resolver: zodResolver(loginSchema) });

  // Fetch request
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        alert("Login successful!");
      },
      onError: (err: any) => {
        if (err.message === "Incorrect password") {
          if (attempsCount == 2) {
            setError("password", {
              message: "Too many attempts. Please try again later.",
            });
            setLockAccount(!lockAccount);
            setTimeout(() => {
              setLockAccount(false);
              if (passwordInput.current) passwordInput.current.value = "";
            }, 3000);
          } else {
            setAttemptsCount(attempsCount + 1);
            setError("password", { message: err.message });
          }
        } else setError("username", { message: err.message });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-3">
          <Label>Username</Label>
          <Input
            {...register("username")}
            type="username"
            maxLength={16}
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="px-3 mt-[-0.4rem] text-xs text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="relative grid gap-3">
          <div className="flex items-center">
            <Label>Password</Label>
          </div>
          <Input
            {...register("password")}
            ref={passwordInput}
            type={showPassword ? "text" : "password"}
            maxLength={16}
            placeholder="**********************"
            disabled={lockAccount ? true : false}
          />
          <Eyes
            state={showPassword}
            onClick={() => setShowPassword(!showPassword)}
          />
          {errors.password && (
            <p className="px-3 mt-[-0.4rem] text-xs text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <Button
            disabled={isSubmitting}
            type="submit"
            className={cn("w-full", isSubmitting && "bg-primary/90")}
          >
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}

export default LoginFormFields;
