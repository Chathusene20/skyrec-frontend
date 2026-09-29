import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import UserData from "./userData";

export default function Header() {
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className="w-full bg-accent h-[100px] text-white px-[40px]">

            <div className="w-full h-full flex relative">

                {/* ================= LOGO - DESKTOP ================= */}
                <img
                    src="/skyrec logo.png"
                    className="hidden lg:flex h-full absolute w-[200px] left-0 border object-cover"
                />

                {/* ================= MOBILE HEADER ================= */}
                <div className="lg:hidden w-full flex justify-center items-center relative">

                    {/* Menu / Dropdown Button */}
                    <MdMenu
                        className="absolute left-0 text-3xl cursor-pointer"
                        onClick={() => setIsSidebarOpen(true)}
                    />

                    <img
                        src="/skyrec logo.png"
                        className="h-full w-[200px] object-cover"
                    />

                </div>

                {/* ================= MOBILE SIDEBAR ================= */}
                {isSideBarOpen && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-[#00000080] z-[100] text-secondary">

                        <div className="w-[300px] bg-primary h-full flex flex-col">

                            {/* Sidebar Header */}
                            <div className="lg:hidden w-full h-[100px] bg-accent flex justify-center items-center relative">

                                <MdMenu
                                    className="absolute left-2 text-white text-3xl cursor-pointer"
                                    onClick={() => setIsSidebarOpen(false)}
                                />

                                <img
                                    src="/skyrec logo.png"
                                    className="h-full w-[200px] object-cover"
                                />

                            </div>

                            {/* Home */}
                            <Link
                                to="/"
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-4 border-b border-secondary/10"
                            >
                                Home
                            </Link>

                            {/* Products */}
                            <Link
                                to="/products"
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-4 border-b border-secondary/10"
                            >
                                Products
                            </Link>

                            {/* Menu */}
                            <Link
                                to="/menu"
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-4 border-b border-secondary/10"
                            >
                                Menu
                            </Link>

                            {/* About */}
                            <Link
                                to="/about"
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-4 border-b border-secondary/10"
                            >
                                About
                            </Link>

                            {/* Contact */}
                            <Link
                                to="/contact"
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-4 border-b border-secondary/10"
                            >
                                Contact
                            </Link>

                            {/* Cart */}
                            <Link
                                to="/cart"
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-4 border-b border-secondary/10"
                            >
                                Cart
                            </Link>

                            {/* User Data */}
                            <div className="lg:hidden flex w-[200px] absolute bottom-[70px] justify-center items-center gap-4">
                                <UserData />
                            </div>

                        </div>

                    </div>
                )}

                {/* ================= DESKTOP NAVIGATION ================= */}
                <div className="hidden h-full lg:flex justify-center items-center w-full text-lg gap-[20px]">

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/products">
                        Products
                    </Link>

                    <Link to="/about">
                        About
                    </Link>

                    <Link to="/contact">
                        Contact
                    </Link>

                </div>

                {/* ================= USER - DESKTOP ================= */}
                <div className="h-full hidden lg:flex w-[200px] absolute right-[100px] top-0 justify-center items-center gap-4">
                    <UserData />
                </div>

                {/* ================= CART - DESKTOP ================= */}
                <Link
                    to="/cart"
                    className="h-full absolute text-3xl right-0 hidden lg:flex justify-center items-center"
                >
                    <AiOutlineShoppingCart />
                </Link>

            </div>

        </header>
    );
}