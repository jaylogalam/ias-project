function PasswordErrors(errors: any) {
  const errorFormat = errors.errors.invalid_format;
  const errorLength = errors.errors.too_small;

  if (errorFormat)
    return (
      <div>
        <p className="text-sm pb-1 text-red-600">Must contain the atleast: </p>
        {showRequirements(errorFormat)}
      </div>
    );
  else if (errorLength)
    return (
      <p className="px-3 py-1 mt-[-0.4rem] text-sm text-red-600">{errorLength}</p>
    );
}

export default PasswordErrors;

function showRequirements(list: Array<string> | string) {
  if (Array.isArray(list))
    return list.map((e: string, i: number) => (
      <p key={i} className="px-3 py-1 mt-[-0.4rem] text-sm text-red-600">
        {`• ${e}`}
      </p>
    ));

  return (
    <p className="px-3 py-1 mt-[-0.4rem] text-sm text-red-600">{`• ${list}`}</p>
  );
}
