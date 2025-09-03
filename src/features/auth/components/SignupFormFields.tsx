import { Button } from "@/components/button";
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../schema/authSchema";
import { useSignupMutation } from "../server/useSignup"
import { useNavigate } from "react-router-dom"
import { cn } from "@/utils/twMerge";

type FormFields = z.infer<typeof signupSchema>;

function SignupFormFields() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormFields>({ resolver: zodResolver(signupSchema) });

  const signupMutation = useSignupMutation();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    signupMutation.mutate(data, {
      onSuccess: () => {
        alert("Account created successfully");
        navigate("/");
      },
      onError: (err: any) => {
        setError("username", {
          message: err.message,
        });
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
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            {...register("password")}
            type="password"
            maxLength={16}
            placeholder="**********************"
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
            Signup
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SignupFormFields