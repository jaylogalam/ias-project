import type { FieldErrors } from "react-hook-form";
import type { AuthTypes } from "../../schema/authTypes";

type Props = {
    errors: FieldErrors<AuthTypes>
}

function ErrorUsername({ errors }: Props) {
    if (!errors.username) return null
    
    return (
    <p className="px-3 mt-[-0.4rem] text-xs text-red-600">
        {errors.username.message}
    </p>
    );
}

export default ErrorUsername;