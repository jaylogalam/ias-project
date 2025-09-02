import { useLoginStore } from "@/data/store";

function Textbox() {
  return <></>;
}

Textbox.Username = (props) => {
  const setUsername = useLoginStore((state) => state.setUsername);

  return (
    <div>
      <input
        {...props}
        name="username"
        id="username"
        type="text"
        placeholder="Username"
        className="bg-gray-100 rounded-md"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

Textbox.Password = (props) => {
  const setPassword = useLoginStore((state) => state.setPassword);

  return (
    <div>
      <input
        {...props}
        name="password"
        id="password"
        type="password"
        placeholder="Password"
        className="bg-gray-100 rounded-md"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default Textbox;
