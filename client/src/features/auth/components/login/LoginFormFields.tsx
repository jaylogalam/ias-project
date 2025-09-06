import { Button } from "@/components/button";
import { cn } from "@/utils/twMerge";
import { useLoginForm } from "../../hooks/useLoginForm";
import Password from "@/components/password";
import Username from "@/components/username";

function LoginFormFields() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <Username type="login" register={register} errors={errors} />
        <Password type="login" register={register} errors={errors} />
        <Button
          disabled={isSubmitting}
          type="submit"
          className={cn("w-full", isSubmitting && "bg-primary/90")}
        >
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginFormFields;
