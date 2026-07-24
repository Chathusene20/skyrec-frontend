import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { BsBox2Heart } from "react-icons/bs";
import { LuUserSearch } from "react-icons/lu";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import { Loader } from "../components/loader";

import AdminProductPage from "./admin/adminproductpage.jsx";
import AdminOrdersPage from "./admin/adminOrdersPage.jsx";
import AddProductPage from "./admin/adminAddNewProducts.jsx";
import UpdateProductPage from "./admin/adminUpdateProduct.jsx";
import AdminUsersPage from "./admin/usersPage.jsx";


// Uncomment this only if you actually have usersPage.jsx
// import UsersPage from "./admin/usersPage";

export default function AdminPage() {
  const navigate = useNavigate();

  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token == null) {
      toast.error("Please login to access admin panel");
      navigate("/login");
      return;
    }

    axios
      .get(import.meta.env.VITE_API_URL + "/api/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.role !== "admin") {
          toast.error("You are not authorized to access admin panel");
          navigate("/");
          return;
        }

        setUserLoaded(true);
      })
      .catch((err) => {
        console.log(err);

        toast.error("Session expired. Please login again");

        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div className="w-full h-full bg-primary flex p-2 text-secondary">

      {/* Sidebar */}
      <div className="w-[300px] h-full bg-primary flex flex-col gap-[20px]">

        {/* Header */}
        <div className="flex flex-row items-center justify-start w-full h-[100px] bg-accent px-4 rounded-[20px] mb-[20px]">
          <img
            src="/skyrec logo.png"
            alt="CBC - Crystal Beauty Clear"
            className="h-[75px] w-auto object-contain"
          />

          <span className="text-white text-3xl font-bold tracking-wide ml-4">
            Admin Panel
          </span>
        </div>

        <Link
          to="/admin"
          className="w-[90%] flex items-center gap-2 px-4 py-3 hover:bg-accent hover:text-white rounded-lg transition"
        >
          <FaChartLine className="text-2xl" />
          Dashboard
        </Link>

        <Link
          to="/admin/orders"
          className="w-[90%] flex items-center gap-2 px-4 py-3 hover:bg-accent hover:text-white rounded-lg transition"
        >
          <MdShoppingCartCheckout className="text-2xl" />
          Orders
        </Link>

        <Link
          to="/admin/products"
          className="w-[90%] flex items-center gap-2 px-4 py-3 hover:bg-accent hover:text-white rounded-lg transition"
        >
          <BsBox2Heart className="text-xl" />
          Products
        </Link>

        <Link
          to="/admin/users"
          className="w-[90%] flex items-center gap-2 px-4 py-3 hover:bg-accent hover:text-white rounded-lg transition"
        >
          <LuUserSearch className="text-2xl" />
          Users
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full border-[4px] border-accent rounded-[20px] ml-2 overflow-hidden">
        <div className="w-full h-full overflow-y-auto">

          {userLoaded ? (
            <Routes>
              <Route path="/" element={<h1>Dashboard</h1>} />

              <Route
                path="/products"
                element={<AdminProductPage />}
              />

              <Route
                path="/orders"
                element={<AdminOrdersPage />}
              />

              <Route
                path="/add-product"
                element={<AddProductPage />}
              />

              <Route
                path="/update-product"
                element={<UpdateProductPage />}
              />

              <Route 
                path="/users"
                element={<AdminUsersPage/>}
                />

            </Routes>
          ) : (
            <Loader />
          )}

        </div>
      </div>
    </div>
  );
}