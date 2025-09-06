import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { cn } from "@/utils/twMerge";
import { useState } from "react";
import Eyes from "@/components/eyes";
import ErrorUsername from "./ErrorUsername";
import ErrorPassword from "./ErrorPassword";
import useSignupForm from "../../hooks/useSignupForm";
import StrengthMeter from "./StrengthMeter";
import Password from "@/components/password";

function SignupFormFields() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, errors, isSubmitting, onSubmit, strength, checkStrength } = useSignupForm();

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
          <ErrorUsername errors={errors} />
        </div>
        <div className="relative grid gap-3">
            <Password type="signup" register={register}/>
            {/* <Input
              {...register("password", {
                onChange: (e) => checkStrength(e.target.value),
              })}
              type={showPassword ? "text" : "password"}
              maxLength={16}
              placeholder="**********************"
            />
          <ErrorPassword errors={errors} /> */}
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
