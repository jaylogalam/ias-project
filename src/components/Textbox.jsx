import { useAuthStore } from "../store/auth";

function Textbox(props) {
  return (
    <div>
      <input {...props} className="bg-gray-100 rounded-md w-full" />
    </div>
  );
}

Textbox.Username = (props) => {
  const setUsername = useAuthStore((state) => state.setUsername);

  return (
    <Textbox
      {...props}
      type="text"
      placeholder="Username"
      maxLength={16}
      onChange={(e) => setUsername(e.target.value)}
    />
  );
};

Textbox.Password = (props) => {
  const setPassword = useAuthStore((state) => state.setPassword);

  return (
    <Textbox
      {...props}
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
    />
  );
};

export default Textbox;
