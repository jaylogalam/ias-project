import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema/authSchema";
import { useLoginMutation } from "../server/useLogin";
import { cn } from "@/utils/twMerge";

type FormFields = z.infer<typeof loginSchema>;

function LoginFormFields() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormFields>({ resolver: zodResolver(loginSchema) });

  const loginMutation = useLoginMutation();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        alert("Login successful!");
      },
      onError: (err: any) => {
        if (err.message === "Incorrect password")
          setError("password", { message: err.message });
        else setError("username", { message: err.message });
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
            Login
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginFormFields