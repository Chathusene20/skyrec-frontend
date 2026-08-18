import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

import AdminPage from "./pages/adminpage";
import HomePage from "./pages/homepage.jsx";
import TestPage from "./pages/test";
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage.jsx";
import ForgetPassword from "./pages/forgetPassword.jsx";
import UserSettings from "./pages/settings.jsx";

import { ProductPage } from "./pages/productPage.jsx";
import ProductOverview from "./pages/productOverview.jsx";
import CartPage from "./pages/cart.jsx";
import CheckoutPage from "./pages/checkout.jsx";

function App() {
    return (
        <BrowserRouter>
            <GoogleOAuthProvider
                clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            >
                <div className="w-full h-[100vh]">
                    <Toaster position="top-right" />

                    <Routes>
                        <Route path="/" element={<HomePage />} />

                        <Route path="/register" element={<RegistrationPage />} />
                        <Route path="/forget-password" element={<ForgetPassword />} />
                        <Route path="/login" element={<LoginPage />} />

                        <Route path="/products" element={<ProductPage />} />
                        <Route path="/contact" element={<h1>Contact Us</h1>} />
                        <Route path="/about" element={<h1>About Us</h1>} />
                        <Route path="/overview/:id" element={<ProductOverview />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />

                        <Route path="/settings" element={<UserSettings />} />

                        <Route path="/admin/*" element={<AdminPage />} />
                        <Route path="/test" element={<TestPage />} />

                        <Route path="*" element={<h1>404 Not Found</h1>} />
                    </Routes>
                </div>
            </GoogleOAuthProvider>
        </BrowserRouter>
    );
}

export default App;