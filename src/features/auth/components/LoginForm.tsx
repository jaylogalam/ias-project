import { cn } from "@/utils/twMerge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card"
import LoginFormFields from "./LoginFormFields";

function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login to your account</CardTitle>
          <CardDescription>
            Enter your username and password below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginFormFields />
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="signup" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm