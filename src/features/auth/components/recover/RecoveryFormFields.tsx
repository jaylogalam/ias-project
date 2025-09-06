import { Button } from "@/components/button";
import { cn } from "@/utils/twMerge";
import useRecoveryForm from "../../hooks/useRecoveryForm";
import Password from "@/components/password";
import Username from "@/components/username";

function RecoverFormFields() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useRecoveryForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <Username type="recovery" register={register} errors={errors}/>
        <Password
          errors={errors}
          disabled={isSubmitting}
          type="recovery"
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
