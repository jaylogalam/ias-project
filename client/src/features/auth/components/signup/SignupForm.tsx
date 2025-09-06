import { cn } from "@/utils/twMerge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import SignupFormFields from "./SignupFormFields";

function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
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
          <SignupFormFields />
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

export default SignupForm;
