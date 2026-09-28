import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../../components/loader";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

import {
    FaShoppingBag,
    FaUsers,
    FaBoxOpen,
    FaMoneyBillWave,
    FaClock,
    FaSpinner,
    FaCheckCircle,
    FaTimesCircle,
    FaArrowUp,
    FaChartLine
} from "react-icons/fa";


export default function AdminDashboard() {

    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem("token");

        axios
            .get(
                import.meta.env.VITE_API_URL + "/api/admin/dashboard",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            .then((res) => {
                console.log("Dashboard data:", res.data);
                setDashboard(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Dashboard error:", error);
                setLoading(false);
            });

    }, []);


    if (loading) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <Loader />
            </div>
        );
    }


    if (!dashboard) {
        return (
            <div className="p-8 text-secondary">
                <div className="bg-white rounded-3xl p-10 text-center shadow-lg">
                    <h1 className="text-2xl font-bold">
                        Failed to load dashboard
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Please try again later.
                    </p>
                </div>
            </div>
        );
    }


    /* --------------------------------
       CHART DATA
    -------------------------------- */

    const orderStatusData = [
        {
            name: "Pending",
            value: dashboard.orderStatus.pending
        },
        {
            name: "Processing",
            value: dashboard.orderStatus.processing
        },
        {
            name: "Completed",
            value: dashboard.orderStatus.completed
        },
        {
            name: "Cancelled",
            value: dashboard.orderStatus.cancelled
        }
    ];


    /*
        The backend currently provides total sales,
        but not monthly sales.

        Therefore we don't create fake monthly values.
        Instead, the area chart represents the
        available order-status distribution.
    */


    const totalStatusOrders =
        dashboard.orderStatus.pending +
        dashboard.orderStatus.processing +
        dashboard.orderStatus.completed +
        dashboard.orderStatus.cancelled;


    const statusPercentage = (value) => {

        if (totalStatusOrders === 0) {
            return 0;
        }

        return Math.round(
            (value / totalStatusOrders) * 100
        );
    };


    const COLORS = [
        "#FF6A1C",
        "#06202B",
        "#F59E0B",
        "#DC2626"
    ];


    return (

        <div className="min-h-full bg-[#FFF1D3] p-5 md:p-7">

            {/* --------------------------------
                HEADER
            -------------------------------- */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <div>

                    <p className="text-sm font-medium text-[#FF6A1C] uppercase tracking-wider">
                        Crystal Beauty Clear
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold text-[#06202B] mt-1">
                        Dashboard
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Overview of your store performance
                    </p>

                </div>


                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-sm">

                    <div className="w-10 h-10 rounded-xl bg-[#06202B] flex items-center justify-center">
                        <FaChartLine className="text-[#FF6A1C]" />
                    </div>

                    <div>

                        <p className="text-xs text-gray-500">
                            Store Overview
                        </p>

                        <p className="font-semibold text-[#06202B]">
                            Live Data
                        </p>

                    </div>

                </div>

            </div>


            {/* --------------------------------
                MAIN STAT CARDS
            -------------------------------- */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">


                {/* SALES */}

                <div className="group bg-[#06202B] rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

                    <div className="flex items-start justify-between">

                        <div>

                            <p className="text-[#FFF1D3]/70 text-sm">
                                Total Sales
                            </p>

                            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                                Rs. {dashboard.stats.totalSales.toLocaleString()}
                            </h2>

                        </div>


                        <div className="w-12 h-12 rounded-2xl bg-[#FF6A1C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                            <FaMoneyBillWave className="text-white text-xl" />

                        </div>

                    </div>


                    <div className="flex items-center gap-2 mt-5 text-sm text-[#FFF1D3]/70">

                        <FaArrowUp className="text-[#FF6A1C]" />

                        <span>
                            Total recorded sales
                        </span>

                    </div>

                </div>


                {/* ORDERS */}

                <div className="group bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

                    <div className="flex items-start justify-between">

                        <div>

                            <p className="text-gray-500 text-sm">
                                Total Orders
                            </p>

                            <h2 className="text-3xl font-bold text-[#06202B] mt-2">
                                {dashboard.stats.totalOrders}
                            </h2>

                        </div>


                        <div className="w-12 h-12 rounded-2xl bg-[#FFF1D3] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                            <FaShoppingBag className="text-[#FF6A1C] text-xl" />

                        </div>

                    </div>


                    <p className="text-gray-400 text-sm mt-5">
                        Orders recorded in the system
                    </p>

                </div>


                {/* CUSTOMERS */}

                <div className="group bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

                    <div className="flex items-start justify-between">

                        <div>

                            <p className="text-gray-500 text-sm">
                                Customers
                            </p>

                            <h2 className="text-3xl font-bold text-[#06202B] mt-2">
                                {dashboard.stats.totalUsers}
                            </h2>

                        </div>


                        <div className="w-12 h-12 rounded-2xl bg-[#06202B] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                            <FaUsers className="text-[#FFF1D3] text-xl" />

                        </div>

                    </div>


                    <p className="text-gray-400 text-sm mt-5">
                        Registered customer accounts
                    </p>

                </div>


                {/* PRODUCTS */}

                <div className="group bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

                    <div className="flex items-start justify-between">

                        <div>

                            <p className="text-gray-500 text-sm">
                                Products
                            </p>

                            <h2 className="text-3xl font-bold text-[#06202B] mt-2">
                                {dashboard.stats.totalProducts}
                            </h2>

                        </div>


                        <div className="w-12 h-12 rounded-2xl bg-[#FF6A1C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                            <FaBoxOpen className="text-white text-xl" />

                        </div>

                    </div>


                    <p className="text-gray-400 text-sm mt-5">
                        Products currently in store
                    </p>

                </div>

            </div>


            {/* --------------------------------
                CHART SECTION
            -------------------------------- */}

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-7">


                {/* ORDER STATUS CHART */}

                <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-lg">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">

                        <div>

                            <h2 className="text-xl font-bold text-[#06202B]">
                                Order Overview
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Current order status distribution
                            </p>

                        </div>


                        <div className="px-4 py-2 rounded-xl bg-[#FFF1D3] text-[#06202B] text-sm font-semibold">

                            {totalStatusOrders} orders

                        </div>

                    </div>


                    <div className="h-[300px]">

                        <ResponsiveContainer width="100%" height="100%">

                            <AreaChart data={orderStatusData}>

                                <defs>

                                    <linearGradient
                                        id="orangeGradient"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >

                                        <stop
                                            offset="0%"
                                            stopColor="#FF6A1C"
                                            stopOpacity={0.5}
                                        />

                                        <stop
                                            offset="100%"
                                            stopColor="#FF6A1C"
                                            stopOpacity={0.03}
                                        />

                                    </linearGradient>

                                </defs>


                                <Tooltip
                                    contentStyle={{
                                        borderRadius: "16px",
                                        border: "none",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.12)"
                                    }}
                                />


                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#FF6A1C"
                                    strokeWidth={4}
                                    fill="url(#orangeGradient)"
                                    animationDuration={1200}
                                />

                            </AreaChart>

                        </ResponsiveContainer>

                    </div>

                </div>


                {/* PIE CHART */}

                <div className="bg-white rounded-3xl p-6 shadow-lg">

                    <div className="mb-3">

                        <h2 className="text-xl font-bold text-[#06202B]">
                            Order Status
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Distribution of orders
                        </p>

                    </div>


                    <div className="h-[250px]">

                        <ResponsiveContainer width="100%" height="100%">

                            <PieChart>

                                <Pie
                                    data={orderStatusData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={4}
                                    dataKey="value"
                                    animationDuration={1200}
                                >

                                    {orderStatusData.map(
                                        (entry, index) => (

                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index]}
                                            />

                                        )
                                    )}

                                </Pie>


                                <Tooltip
                                    contentStyle={{
                                        borderRadius: "16px",
                                        border: "none",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.12)"
                                    }}
                                />

                                <Legend />

                            </PieChart>

                        </ResponsiveContainer>

                    </div>

                </div>

            </div>


            {/* --------------------------------
                STATUS CARDS
            -------------------------------- */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-7">


                {/* PENDING */}

                <div className="bg-white rounded-3xl p-5 shadow-md border-l-4 border-[#FF6A1C] hover:-translate-y-1 transition-all duration-300">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500 text-sm">
                                Pending
                            </p>

                            <h2 className="text-3xl font-bold text-[#06202B] mt-1">
                                {dashboard.orderStatus.pending}
                            </h2>

                        </div>

                        <FaClock className="text-[#FF6A1C] text-2xl" />

                    </div>

                    <p className="text-xs text-gray-400 mt-3">
                        {statusPercentage(dashboard.orderStatus.pending)}% of orders
                    </p>

                </div>


                {/* PROCESSING */}

                <div className="bg-white rounded-3xl p-5 shadow-md border-l-4 border-[#06202B] hover:-translate-y-1 transition-all duration-300">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500 text-sm">
                                Processing
                            </p>

                            <h2 className="text-3xl font-bold text-[#06202B] mt-1">
                                {dashboard.orderStatus.processing}
                            </h2>

                        </div>

                        <FaSpinner className="text-[#06202B] text-2xl" />

                    </div>

                    <p className="text-xs text-gray-400 mt-3">
                        {statusPercentage(dashboard.orderStatus.processing)}% of orders
                    </p>

                </div>


                {/* COMPLETED */}

                <div className="bg-white rounded-3xl p-5 shadow-md border-l-4 border-[#FF6A1C] hover:-translate-y-1 transition-all duration-300">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500 text-sm">
                                Completed
                            </p>

                            <h2 className="text-3xl font-bold text-[#06202B] mt-1">
                                {dashboard.orderStatus.completed}
                            </h2>

                        </div>

                        <FaCheckCircle className="text-[#FF6A1C] text-2xl" />

                    </div>

                    <p className="text-xs text-gray-400 mt-3">
                        {statusPercentage(dashboard.orderStatus.completed)}% of orders
                    </p>

                </div>


                {/* CANCELLED */}

                <div className="bg-white rounded-3xl p-5 shadow-md border-l-4 border-red-500 hover:-translate-y-1 transition-all duration-300">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-gray-500 text-sm">
                                Cancelled
                            </p>

                            <h2 className="text-3xl font-bold text-[#06202B] mt-1">
                                {dashboard.orderStatus.cancelled}
                            </h2>

                        </div>

                        <FaTimesCircle className="text-red-500 text-2xl" />

                    </div>

                    <p className="text-xs text-gray-400 mt-3">
                        {statusPercentage(dashboard.orderStatus.cancelled)}% of orders
                    </p>

                </div>

            </div>


            {/* --------------------------------
                RECENT ORDERS
            -------------------------------- */}

            <div className="mt-7 bg-white rounded-3xl shadow-lg overflow-hidden">

                <div className="p-6 border-b">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                        <div>

                            <h2 className="text-xl font-bold text-[#06202B]">
                                Recent Orders
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Latest orders from your customers
                            </p>

                        </div>


                        <div className="flex items-center gap-2 text-sm font-semibold text-[#FF6A1C]">

                            <span className="w-2 h-2 rounded-full bg-[#FF6A1C] animate-pulse"></span>

                            Live data

                        </div>

                    </div>

                </div>


                <div className="overflow-x-auto">

                    <table className="w-full min-w-[800px]">

                        <thead>

                            <tr className="bg-[#06202B] text-white">

                                <th className="px-6 py-4 text-left text-sm font-semibold">
                                    Order ID
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold">
                                    Customer
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold">
                                    Email
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold">
                                    Total
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold">
                                    Date
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {dashboard.recentOrders.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="px-6 py-12 text-center text-gray-500"
                                    >

                                        <div className="flex flex-col items-center">

                                            <FaShoppingBag className="text-4xl text-gray-300 mb-3" />

                                            <p className="font-medium">
                                                No orders found
                                            </p>

                                            <p className="text-sm mt-1">
                                                Recent customer orders will appear here.
                                            </p>

                                        </div>

                                    </td>

                                </tr>

                            ) : (

                                dashboard.recentOrders.map((order, index) => (

                                    <tr
                                        key={order.orderID}
                                        className="border-b hover:bg-[#FFF1D3]/50 transition-all duration-200"
                                        style={{
                                            animation: `fadeIn 0.4s ease ${index * 0.08}s both`
                                        }}
                                    >

                                        <td className="px-6 py-4">

                                            <span className="font-semibold text-[#06202B]">
                                                {order.orderID}
                                            </span>

                                        </td>


                                        <td className="px-6 py-4">

                                            <div className="font-medium text-[#06202B]">
                                                {order.customerName}
                                            </div>

                                        </td>


                                        <td className="px-6 py-4 text-gray-500">
                                            {order.email}
                                        </td>


                                        <td className="px-6 py-4">

                                            <span className="font-bold text-[#FF6A1C]">
                                                Rs. {order.total.toLocaleString()}
                                            </span>

                                        </td>


                                        <td className="px-6 py-4">

                                            <span
                                                className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${
                                                    order.status === "completed"
                                                        ? "bg-green-100 text-green-700"
                                                        : order.status === "cancelled"
                                                        ? "bg-red-100 text-red-700"
                                                        : order.status === "processing"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "bg-orange-100 text-orange-700"
                                                }`}
                                            >
                                                {order.status}
                                            </span>

                                        </td>


                                        <td className="px-6 py-4 text-gray-500">

                                            {new Date(
                                                order.date
                                            ).toLocaleDateString()}

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}