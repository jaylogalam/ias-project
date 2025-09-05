import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { signupSchema } from "../../schema/authSchema";
import { cn } from "@/utils/twMerge";
import { useState } from "react";
import Eyes from "@/components/eyes";
import PasswordErrors from "../PasswordRequirements";
import useAuthForm from "../../hooks/useAuthForm";
import { useSignupRequest } from "../../hooks/useSignupRequest";

type FormFields = z.infer<typeof signupSchema>;

function SignupFormFields() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useAuthForm();

  // Fetch request
  const onSubmitHandler = useSignupRequest(setError);
  const onSubmit: SubmitHandler<FormFields> = (data) =>
    onSubmitHandler.mutate(data);

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
            type={showPassword ? "text" : "password"}
            maxLength={16}
            placeholder="**********************"
          />
          <Eyes
            state={showPassword}
            onClick={() => setShowPassword(!showPassword)}
          />
          {errors.password && <PasswordErrors errors={errors.password.types} />}
        </div>
        <div className="flex flex-col gap-3">
          <Button
            disabled={isSubmitting}
            type="submit"
            className={cn("w-full", isSubmitting && "bg-primary/90")}
          >
            Signup
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SignupFormFields;
