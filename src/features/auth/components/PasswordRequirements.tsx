function PasswordErrors(errors: any) {
    const errorList = errors.errors.invalid_format
    
    return (
      <div>
        <p className="text-sm pb-1 text-red-600">Must contain the atleast: </p>
            {Array.isArray(errorList) ?
                (errorList.map((e: string, i: number) => (
                    <p key={i} className="px-3 py-1 mt-[-0.4rem] text-sm text-red-600">
                        {`• ${e}`}
                    </p>)
                )
                ) : (<p className="px-3 py-1 mt-[-0.4rem] text-sm text-red-600">
                    {`• ${errorList}`}
                </p>)
            }
      </div>
    );
}

export default PasswordErrors