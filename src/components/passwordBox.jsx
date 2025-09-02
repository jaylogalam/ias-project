function PasswordBox({ label }) {
  return (
    <div>
      <input
        name="password"
        id="password"
        type="password"
        placeholder={label}
        className="bg-gray-100 rounded-md"
      />
    </div>
  );
}

export default PasswordBox;
