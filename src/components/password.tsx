"use client";

import { useId, useMemo, useState } from "react";
import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react";

import { Input } from "@/components/input";
import { Label } from "@/components/label";
import type { FieldErrors } from "react-hook-form";
import type { AuthTypes } from "@/features/auth/schema/authTypes";

type Props = {
  type: "signup" | "login";
  register: any;
  disabled?: boolean
  errors: FieldErrors<AuthTypes>
};

export default function Password({ errors, type, register, disabled }: Props) {
  const id = useId();
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  if (type === "login")
    return (
      <div className="*:not-first:mt-2 mb-4">
        <Label htmlFor={id}>Password</Label>
        <div className="relative">
          <Input
            {...register("password", {
              onChange: (e: any) => setPassword(e.target.value),
            })}
            id={id}
            className="pe-9"
            placeholder="Password"
            type={isVisible ? "text" : "password"}
            value={password}
            disabled={disabled}
            aria-describedby={`${id}-description`}
            aria-invalid={errors.password ? true : false}
          />
          <button
            className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            type="button"
            onClick={toggleVisibility}
            aria-label={isVisible ? "Hide password" : "Show password"}
            aria-pressed={isVisible}
            aria-controls="password"
          >
            {isVisible ? (
              <EyeOffIcon size={16} aria-hidden="true" />
            ) : (
              <EyeIcon size={16} aria-hidden="true" />
            )}
          </button>
          <div className="absolute flex mb-2 w-full px-2 mt-2 ">
            {errors.password && (
              <p className="text-sm text-red-600">{errors.password.message}</p>
            )}
            <a
              href="/recover"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    );

  const checkStrength = (pass: string) => {
    const requirements = [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /[0-9]/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
      { regex: /[!@#$%^&*(),.?":{}|<>]/, text: "At least 1 special symbol" },
    ];

    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }));
  };

  const strength = checkStrength(password);

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length;
  }, [strength]);

  const getStrengthColor = (score: number) => {
    if (score === 0) return "bg-border";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    if (score === 4) return "bg-emerald-500";

    return "bg-emerald-600";
  };

  const getStrengthText = (score: number) => {
    if (score === 0) return "Enter a password";
    if (score <= 2) return "Weak";
    if (score === 3) return "Medium";
    if (score === 4) return "Strong"
    return "Very strong";
  };

  return (
    <div>
      {/* Password input field with toggle visibility button */}
      <div className="*:not-first:mt-2">
        <Label htmlFor={id}>Password</Label>
        <div className="relative">
          <Input
            {...register("password", {
              onChange: (e: any) => setPassword(e.target.value),
            })}
            id={id}
            className="pe-9"
            placeholder="Password"
            type={isVisible ? "text" : "password"}
            value={password}
            disabled={disabled}
            aria-describedby={`${id}-description`}
            aria-invalid={errors.password ? true : false}
          />
          <button
            className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            type="button"
            onClick={toggleVisibility}
            aria-label={isVisible ? "Hide password" : "Show password"}
            aria-pressed={isVisible}
            aria-controls="password"
          >
            {isVisible ? (
              <EyeOffIcon size={16} aria-hidden="true" />
            ) : (
              <EyeIcon size={16} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Password strength indicator */}
      <div
        className="bg-border mt-3 mb-4 h-1 w-full overflow-hidden rounded-full"
        role="progressbar"
        aria-valuenow={strengthScore}
        aria-valuemin={0}
        aria-valuemax={4}
        aria-label="Password strength"
      >
        <div
          className={`h-full ${getStrengthColor(
            strengthScore
          )} transition-all duration-500 ease-out`}
          style={{ width: `${(strengthScore / 5) * 100}%` }}
        ></div>
      </div>

      {/* Password strength description */}
      <p
        id={`${id}-description`}
        className="text-foreground mb-2 text-sm font-medium"
      >
        {getStrengthText(strengthScore)}. Must contain:
      </p>

      {/* Password requirements list */}
      <ul className="space-y-1.5" aria-label="Password requirements">
        {strength.map((req, index) => (
          <li key={index} className="flex items-center gap-2">
            {req.met ? (
              <CheckIcon
                size={16}
                className="text-emerald-500"
                aria-hidden="true"
              />
            ) : (
              <XIcon
                size={16}
                className="text-muted-foreground/80"
                aria-hidden="true"
              />
            )}
            <span
              className={`text-xs ${
                req.met ? "text-emerald-600" : "text-muted-foreground"
              }`}
            >
              {req.text}
              <span className="sr-only">
                {req.met ? " - Requirement met" : " - Requirement not met"}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
