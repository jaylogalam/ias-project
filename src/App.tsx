import { Routes, Route } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import SignupPage from "./features/auth/pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} /> 
    </Routes>
  );
}

export default App;
