import type { FieldErrors } from "react-hook-form";
import { Input } from "./input";
import { Label } from "./label";
import type { AuthTypes } from "@/features/auth/schema/authTypes";

type Props = {
    type: "signup" | "login" | "recovery"
    register: any
    disabled?: boolean
    errors: FieldErrors<AuthTypes>
}

export default function Username({ errors, register, disabled }: Props) {
  return (
    <div className="grid gap-3">
      <Label>Username</Label>
      <Input
        {...register("username")}
        type="username"
        maxLength={16}
        placeholder="Enter your username"
        disabled={disabled}
        aria-invalid={errors.username ? true : false}
      />
      {errors.username && (
        <p className="px-3 mt-[-0.4rem] text-xs text-red-600">
          {errors.username.message}
        </p>
      )}
    </div>
  );
}
