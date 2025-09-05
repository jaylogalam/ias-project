import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import Eyes from "@/components/eyes";
import { cn } from "@/utils/twMerge";
import { useLoginForm } from "../../hooks/useLoginForm";
import ErrorUsername from "./ErrorUsername";
import ErrorPassword from "./ErrorPassword";

function LoginFormFields() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    passwordInput,
    showPassword,
    setShowPassword,
    lockAccount,
  } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        {/* Username */}
        <div className="grid gap-3">
          <Label>Username</Label>
          <Input
            {...register("username")}
            type="username"
            maxLength={16}
            placeholder="Enter your username"
          />
          <ErrorUsername errors={errors} />
        </div>

        {/* Password */}
        <div className="relative grid gap-3">
          <div className="flex items-center">
            <Label>Password</Label>
          </div>
          <Input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            maxLength={16}
            placeholder="**********************"
            disabled={lockAccount}
          />
          <Eyes
            state={showPassword}
            onClick={() => setShowPassword(!showPassword)}
          />
          <ErrorPassword errors={errors} />
        </div>

        {/* Submit */}
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
