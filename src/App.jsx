import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AdminPage from "./pages/adminpage";
import HomePage from "./pages/homepage.jsx";
import TestPage from "./pages/test";
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ForgetPassword from "./pages/forgetPassword.jsx";
import UserSettings from "./pages/settings.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div className="w-full h-[100vh]">
        <Toaster position="top-right" />

        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/settings" element={<UserSettings />} />
        </Routes>
      </div>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;


