import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import { ProductPage } from "./productPage.jsx";
import ProductOverview from "./productOverview.jsx";
import CartPage from "./cart.jsx";
import CheckoutPage from "./checkout.jsx";
import UserSettings from "./settings.jsx";

export default function HomePage() {
    return (
        <div className="w-full h-full bg-primary">
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={<h1>Welcome to the Home Page</h1>}
                />

                <Route
                    path="/products"
                    element={<ProductPage />}
                />

                <Route
                    path="/contact"
                    element={<h1>Contact Us</h1>}
                />

                <Route
                    path="/about"
                    element={<h1>About Us</h1>}
                />

                <Route
                    path="/overview/:id"
                    element={<ProductOverview />}
                />

                <Route
                    path="/cart"
                    element={<CartPage />}
                />

                <Route
                    path="/checkout"
                    element={<CheckoutPage />}
                />

                {/* Account Settings */}
                <Route
                    path="/settings"
                    element={<UserSettings />}
                />

                <Route
                    path="/*"
                    element={<h1>404 Not found</h1>}
                />
            </Routes>
        </div>
    );
}