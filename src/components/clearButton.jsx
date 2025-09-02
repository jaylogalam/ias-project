import { useLoginStore } from "../data/store";

function ResetButton() {
  const username = useLoginStore((state) => state.username);
  const password = useLoginStore((state) => state.password);
  const click = () => alert(username);

  return (
    <button className="mx-2 bg-gray-100" onClick={click}>
      Reset
    </button>
  );
}

export default ResetButton;
