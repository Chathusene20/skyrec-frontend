import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  async function sendOTP() {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      await axios.get(
        `${import.meta.env.VITE_API_URL}/api/users/send-otp/${email}`
      );

      toast.success(`OTP sent to ${email}`);
      setStep("otp");
    } catch (e) {
      console.error(e);
      toast.error("Failed to send OTP. Please try again.");
    }
  }

  async function changePassword() {
    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    if (!newPassword || !confirmPassword) {
      toast.error("Please fill all password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      await axios.post(
       `${import.meta.env.VITE_API_URL}/api/users/change-password`,
  {
       email,
       otp,
       newPassword,
  }
);
      
      
      
      
      
      
      

      toast.success(
        "Password changed successfully. Please login with your new password."
      );

      navigate("/login");
    } catch (e) {
      console.error(e);
      toast.error("OTP is incorrect or expired. Please try again.");
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('/bg.jpg')] bg-cover bg-center">
      {step === "email" && (
        <div className="w-[400px] backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-xl flex flex-col">
          <h1 className="text-2xl font-semibold text-secondary text-center mb-6">
            Reset Password
          </h1>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg border border-secondary/20 mb-4 focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <button
            className="w-full bg-accent text-white p-3 rounded-lg hover:bg-accent/90 transition"
            onClick={sendOTP}
          >
            Send OTP
          </button>
        </div>
      )}

      {step === "otp" && (
        <div className="w-[400px] backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-xl flex flex-col">
          <h1 className="text-2xl font-semibold text-secondary text-center mb-6">
            Reset Password
          </h1>

          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full p-3 rounded-lg border border-secondary/20 mb-4 focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full p-3 rounded-lg border border-secondary/20 mb-4 focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full p-3 rounded-lg border border-secondary/20 mb-6 focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <button
            className="w-full bg-accent text-white p-3 rounded-lg hover:bg-accent/90 transition"
            onClick={changePassword}
          >
            Change Password
          </button>
        </div>
      )}
    </div>
  );
}