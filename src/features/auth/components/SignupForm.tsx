import { cn } from "@/utils/twMerge"
import { Button } from "@/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../schema/authSchema";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create a new account</CardTitle>
          <CardDescription>
            Enter your username and password below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm.Form />
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/" className="underline underline-offset-4">
              Log in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

type FormFields = z.infer<typeof signupSchema>;

SignupForm.Form = () => {
  const { register, handleSubmit, formState: {errors, isSubmitting}, setError } = useForm<FormFields>({resolver: zodResolver(signupSchema)});
  
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(data);
    } catch (err) {
      setError("username", {
        message: "Username already exists"
      })
    }
  }

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
}