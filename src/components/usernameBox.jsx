import { useLoginStore } from "../data/store";

function UsernameBox({ label }) {
  const username = useLoginStore((state) => state.username);
  const setUsername = useLoginStore((state) => state.setUsername);

  return (
    <div>
      <input
        name="username"
        id="username"
        type="text"
        placeholder={label}
        className="bg-gray-100 rounded-md"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}

export default UsernameBox;
