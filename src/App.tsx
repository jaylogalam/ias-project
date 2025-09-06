import { Routes, Route } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import SignupPage from "./features/auth/pages/SignupPage";
import RecoveryPage from "./features/auth/pages/RecoveryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} /> 
      <Route path="/recovery" element={<RecoveryPage />} />
    </Routes>
  );
}

export default App;
