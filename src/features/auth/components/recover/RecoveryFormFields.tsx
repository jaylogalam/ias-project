import { Button } from "@/components/button";
import { cn } from "@/utils/twMerge";
import useSignupForm from "../../hooks/useSignupForm";
import Password from "@/components/password";
import Username from "@/components/username";

function RecoverFormFields() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useSignupForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <Username type="signup" register={register} errors={errors} />
        <Password
          errors={errors}
          disabled={isSubmitting}
          type="signup"
          register={register}
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          className={cn("w-full", isSubmitting && "bg-primary/90")}
        >
          Signup
        </Button>
      </div>
    </form>
  );
}

export default RecoverFormFields;
