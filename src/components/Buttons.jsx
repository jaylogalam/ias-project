import { useLoginStore } from "../data/store";

function Button() {}

Button.Login = () => {
  const username = useLoginStore((state) => state.username);
  const password = useLoginStore((state) => state.password);

  const submit = () => {
    alert(username, password);
  };

  return (
    <button className="mx-2 bg-gray-100" onClick={submit}>
      Login
    </button>
  );
};

Button.Reset = () => {
  const username = useLoginStore((state) => state.username);
  const password = useLoginStore((state) => state.password);

  return <button className="mx-2 bg-gray-100">Reset</button>;
};

export default Button;
