import type { FieldErrors, MultipleFieldErrors } from "react-hook-form";
import type { AuthTypes } from "../../schema/authTypes";

function ErrorPassword({ errors }: {errors: FieldErrors<AuthTypes>}) {
    if (!errors.password) return null;
    
    return <ErrorPassword.List errors={errors.password.types} />

}

ErrorPassword.List = ({errors}: {errors: MultipleFieldErrors | undefined}) => {
    if (!errors) return null;

    const errorFormat = errors.invalid_format;
    const errorLength = errors.too_small;

    if (errorFormat)
    return (
        <div>
            <p className="text-sm pb-1 text-red-600">
                Must contain the atleast:{" "}
            </p>
            <ErrorPassword.Requirements list={errorFormat} />
        </div>
    );
    
    else if (errorLength)
    return (
        <p className="px-3 py-1 mt-[-0.4rem] text-sm text-red-600">
            {errorLength}
        </p>
    );
}

ErrorPassword.Requirements = ({list}: {list: string | true | string[]}) => {
    if (Array.isArray(list))
    return list.map((e: string, i: number) => (
      <p key={i} className="px-3 py-1 mt-[-0.4rem] text-sm text-red-600">
        {`• ${e}`}
      </p>
    ));

  return (
    <p className="px-3 py-1 mt-[-0.4rem] text-sm text-red-600">{`• ${list}`}</p>
  );
};

export default ErrorPassword;