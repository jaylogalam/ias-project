function UsernameBox({label}) {
    return <div>
        <input
            name="username"
            id="username"
            type="text"
            placeholder={label}
            className="bg-gray-50 rounded-md px-2"
        />
    </div>
}

export default UsernameBox