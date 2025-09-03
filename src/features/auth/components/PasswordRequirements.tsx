function PasswordErrors(errors: any) {
    const errorList = errors.errors.invalid_format
    const length = errors.errors.too_small

    if (errorList) return (
      <div>
        <p className="text-sm pb-1 text-red-600">Must contain the atleast: </p>
        {showRequirements(errorList)}
      </div>
    );
    else if (length) return (
      <p className="px-3 py-1 mt-[-0.4rem] text-sm text-red-600">{length}</p>
    );
    
}

export default PasswordErrors

function showRequirements(list: Array<string> | string) {
    if (Array.isArray(list)) return list.map((e: string, i: number) => (
      <p key={i} className="px-3 py-1 mt-[-0.4rem] text-sm text-red-600">
        {`• ${e}`}
      </p>
    ));

    return <p className="px-3 py-1 mt-[-0.4rem] text-sm text-red-600">{`• ${list}`}</p>;
}