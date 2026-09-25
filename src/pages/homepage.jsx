import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import { ProductPage } from "./productPage.jsx";
import ProductOverview from "./productOverview.jsx";
import CartPage from "./cart.jsx";
import CheckoutPage from "./checkout.jsx";
import UserSettings from "./settings.jsx";
import AboutPage from "./aboutUs.jsx";
import { HomePagee } from "./homePageContent.jsx";
import { ContactPage } from "./contactPage.jsx";

export default function HomePage() {
    return (
        <div className="w-full h-full bg-primary">
            <Header />

            <Routes>
                <Route 
                    path="/"
                    element={<HomePagee/>}
                />

                <Route
                    path="/products"
                    element={<ProductPage />}
                />

                <Route
                    path="/contact"
                    element={<ContactPage/>}
                />

                <Route
                    path="/about"
                    element={<AboutPage/>}
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