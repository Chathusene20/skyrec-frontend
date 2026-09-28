import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../../components/loader";

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
        return <Loader />;
    }

    if (!dashboard) {
        return (
            <div className="p-8 text-secondary">
                <h1 className="text-2xl font-bold">
                    Failed to load dashboard
                </h1>
            </div>
        );
    }

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold text-secondary mb-6">
                Dashboard
            </h1>

            {/* Statistics */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

                {/* Total Sales */}
                <div className="bg-white rounded-2xl p-5 shadow">
                    <p className="text-gray-500">
                        Total Sales
                    </p>

                    <h2 className="text-3xl font-bold text-accent mt-2">
                        Rs. {dashboard.stats.totalSales.toLocaleString()}
                    </h2>
                </div>

                {/* Total Orders */}
                <div className="bg-white rounded-2xl p-5 shadow">
                    <p className="text-gray-500">
                        Total Orders
                    </p>

                    <h2 className="text-3xl font-bold text-secondary mt-2">
                        {dashboard.stats.totalOrders}
                    </h2>
                </div>

                {/* Customers */}
                <div className="bg-white rounded-2xl p-5 shadow">
                    <p className="text-gray-500">
                        Customers
                    </p>

                    <h2 className="text-3xl font-bold text-secondary mt-2">
                        {dashboard.stats.totalUsers}
                    </h2>
                </div>

                {/* Products */}
                <div className="bg-white rounded-2xl p-5 shadow">
                    <p className="text-gray-500">
                        Products
                    </p>

                    <h2 className="text-3xl font-bold text-secondary mt-2">
                        {dashboard.stats.totalProducts}
                    </h2>
                </div>

            </div>


            {/* Order Status */}

            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">
                Order Status
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

                <div className="bg-white rounded-2xl p-5 shadow">
                    <p className="text-gray-500">
                        Pending
                    </p>

                    <h2 className="text-3xl font-bold text-accent mt-2">
                        {dashboard.orderStatus.pending}
                    </h2>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow">
                    <p className="text-gray-500">
                        Processing
                    </p>

                    <h2 className="text-3xl font-bold text-secondary mt-2">
                        {dashboard.orderStatus.processing}
                    </h2>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow">
                    <p className="text-gray-500">
                        Completed
                    </p>

                    <h2 className="text-3xl font-bold text-secondary mt-2">
                        {dashboard.orderStatus.completed}
                    </h2>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow">
                    <p className="text-gray-500">
                        Cancelled
                    </p>

                    <h2 className="text-3xl font-bold text-secondary mt-2">
                        {dashboard.orderStatus.cancelled}
                    </h2>
                </div>

            </div>


            {/* Recent Orders */}

            <div className="mt-8">

                <h2 className="text-2xl font-bold text-secondary mb-4">
                    Recent Orders
                </h2>

                <div className="bg-white rounded-2xl shadow overflow-x-auto">

                    <table className="w-full">

                        <thead>
                            <tr className="bg-secondary text-white">

                                <th className="p-4 text-left">
                                    Order ID
                                </th>

                                <th className="p-4 text-left">
                                    Customer
                                </th>

                                <th className="p-4 text-left">
                                    Email
                                </th>

                                <th className="p-4 text-left">
                                    Total
                                </th>

                                <th className="p-4 text-left">
                                    Status
                                </th>

                                <th className="p-4 text-left">
                                    Date
                                </th>

                            </tr>
                        </thead>

                        <tbody>

                            {dashboard.recentOrders.length === 0 ? (

                                <tr>
                                    <td
                                        colSpan="6"
                                        className="p-6 text-center text-gray-500"
                                    >
                                        No orders found
                                    </td>
                                </tr>

                            ) : (

                                dashboard.recentOrders.map((order) => (

                                    <tr
                                        key={order.orderID}
                                        className="border-b"
                                    >

                                        <td className="p-4">
                                            {order.orderID}
                                        </td>

                                        <td className="p-4">
                                            {order.customerName}
                                        </td>

                                        <td className="p-4">
                                            {order.email}
                                        </td>

                                        <td className="p-4">
                                            Rs. {order.total.toLocaleString()}
                                        </td>

                                        <td className="p-4">
                                            {order.status}
                                        </td>

                                        <td className="p-4">
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