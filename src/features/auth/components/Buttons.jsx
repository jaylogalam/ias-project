import { accounts } from "../store/accounts";
import { useAuthStore } from "../store/auth";
import { hashPassword } from "../../backend/hashing";

function Button(props) {
  return <button {...props} className="bg-gray-100 w-full" />;
}

Button.Login = (props) => {
  const username = useAuthStore((state) => state.username);
  const password = useAuthStore((state) => state.password);

  const handleLogin = () => {};

  return (
    <Button {...props} onClick={() => handleLogin()}>
      Login
    </Button>
  );
};

Button.Register = (props) => {
  const username = useAuthStore((state) => state.username);
  const password = useAuthStore((state) => state.password);

  const handleRegister = () => {
    alert(username, password);
  };

  return (
    <Button {...props} onClick={handleRegister}>
      Register
    </Button>
  );
};

Button.Reset = () => {
  const username = useAuthStore((state) => state.username);
  const password = useAuthStore((state) => state.password);

  return <Button>Reset</Button>;
};

export default Button;
