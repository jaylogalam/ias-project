import Textbox from "@/components/Textbox.jsx";
import Button from "@/components/Buttons.jsx";

function LoginForm() {
  return (
    <div className="grid gap-8 border-black border-2 px-20 py-12 rounded-4xl">
      {/* User input */}
      <div className="grid gap-4">
        <Textbox.Username />
        <Textbox.Password />
      </div>

      {/* Submit Button */}
      <div className="flex-1">
        <Button.Reset />
        <Button.Login />
      </div>
    </div>
  );
}

export default LoginForm;
