import { cn } from "@/utils/twMerge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import RecoverFormFields from "./RecoveryFormFields";

function RecoverForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Recover your account</CardTitle>
          <CardDescription>
            Enter a new password below to recover your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecoverFormFields />
        </CardContent>
      </Card>
    </div>
  );
}

export default RecoverForm;
