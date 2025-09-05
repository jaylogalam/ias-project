import type { FieldErrors } from "react-hook-form";
import type { AuthTypes } from "../../schema/authTypes";

type Props = {
    errors: FieldErrors<AuthTypes>
}

function ErrorPassword({ errors }: Props) {
    if (!errors.password) return null
    
    return (
    <p className="px-3 mt-[-0.4rem] text-xs text-red-600">
        {errors.password.message}
    </p>
    );
}

export default ErrorPassword;