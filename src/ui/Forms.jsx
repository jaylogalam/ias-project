import Button from "../components/Buttons";
import Textbox from "@/components/Textbox";

function Form() {}

Form.Login = () => {
  return (
    <div className="grid gap-8 border-black border-2 px-20 py-12 rounded-4xl">
      <p className="text-4xl">Welcome back!</p>
      {/* User input */}
      <div className="grid gap-4">
        <Textbox.Username />
        <Textbox.Password />
      </div>

      {/* Submit Button */}
      <div className="flex gap-4">
        <Button.Reset />
        <Button.Login />
      </div>
    </div>
  );
};

Form.Register = () => {
  return (
    <div className="grid gap-8 border-black border-2 px-20 py-12 rounded-4xl">
      <p className="text-4xl">Create an account!</p>
      {/* User input */}
      <div className="grid gap-4">
        <Textbox.Username />
        <Textbox.Password />
      </div>

      {/* Submit Button */}
      <div className="flex gap-4">
        <Button.Reset />
        <Button.Register />
      </div>
    </div>
  );
};

export default Form;
