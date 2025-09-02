import UsernameBox from "@/components/UsernameBox.jsx";
import PasswordBox from "@/components/PasswordBox.jsx";
import ClearButton from "@/components/ClearButton.jsx";
import SubmitButton from "@/components/SubmitButton";

function LoginForm() {
  return (
    <div className="grid gap-8 border-black border-2 p-20 rounded-4xl">
      {/* User input */}
      <div className="grid gap-4">
        <UsernameBox label="Username" />
        <PasswordBox label="Password" />
      </div>

      {/* Submit Button */}
      <div className="flex-1">
        <ClearButton />
        <SubmitButton />
      </div>
    </div>
  );
}

export default LoginForm;
