function PasswordBox({label}) {
    return <div>
        <input
            name="password"
            id="password"
            type="password"
            placeholder={label}
            className="bg-gray-50 rounded-md px-2"
        />
    </div>
}

export default PasswordBox