import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    async function fetchOrders() {
        const token = localStorage.getItem("token");

        if (!token) {
            toast.error("Please login to view your orders");
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.get(
                import.meta.env.VITE_API_URL + "/api/orders",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setOrders(response.data);
        } catch (error) {
            console.error("Error loading orders:", error);

            if (error.response?.status === 401) {
                toast.error("Please login again");
            } else if (error.response?.status === 403) {
                toast.error("You are not authorized to view orders");
            } else {
                toast.error("Failed to load orders");
            }
        } finally {
            setIsLoading(false);
        }
    }

    function formatDate(date) {
        if (!date) return "Date unavailable";

        return new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    }

    function formatPrice(price) {
        return Number(price || 0).toLocaleString("en-LK", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    function getStatusConfig(status) {
        const currentStatus = status?.toLowerCase();

        switch (currentStatus) {
            case "delivered":
                return {
                    label: "Delivered",
                    className: "bg-green-100 text-green-700",
                    dot: "bg-green-500",
                };

            case "shipped":
                return {
                    label: "Shipped",
                    className: "bg-blue-100 text-blue-700",
                    dot: "bg-blue-500",
                };

            case "processing":
                return {
                    label: "Processing",
                    className: "bg-yellow-100 text-yellow-700",
                    dot: "bg-yellow-500",
                };

            case "cancelled":
                return {
                    label: "Cancelled",
                    className: "bg-red-100 text-red-700",
                    dot: "bg-red-500",
                };

            default:
                return {
                    label: "Pending",
                    className: "bg-orange-100 text-orange-700",
                    dot: "bg-accent",
                };
        }
    }

    /* ================= LOADING ================= */

    if (isLoading) {
        return (
            <div className="w-full min-h-screen bg-primary flex items-center justify-center px-6">

                <div className="text-center">

                    <div className="relative w-16 h-16 mx-auto">

                        <div
                            className="
                                absolute
                                inset-0
                                rounded-full
                                border-4
                                border-secondary/10
                            "
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                rounded-full
                                border-4
                                border-accent
                                border-t-transparent
                                animate-spin
                            "
                        />

                    </div>

                    <h2 className="mt-6 text-xl font-bold text-secondary">
                        Loading your orders
                    </h2>

                    <p className="mt-2 text-sm text-secondary/50">
                        Please wait a moment...
                    </p>

                </div>

            </div>
        );
    }

    /* ================= MAIN PAGE ================= */

    return (
        <div className="w-full min-h-screen bg-primary text-secondary">

            {/* ================= HERO ================= */}

            <section className="w-full px-5 sm:px-8 pt-12 md:pt-16 pb-10">

                <div className="max-w-6xl mx-auto">

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

                        <div>

                            <span
                                className="
                                    inline-flex
                                    items-center
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-accent/10
                                    text-accent
                                    text-xs
                                    font-bold
                                    tracking-[0.2em]
                                    uppercase
                                "
                            >
                                My Account
                            </span>

                            <h1
                                className="
                                    mt-5
                                    text-4xl
                                    md:text-5xl
                                    lg:text-6xl
                                    font-bold
                                    tracking-tight
                                    text-secondary
                                "
                            >
                                My Orders
                            </h1>

                            <p
                                className="
                                    mt-4
                                    max-w-xl
                                    text-secondary/60
                                    text-sm
                                    md:text-base
                                    leading-relaxed
                                "
                            >
                                Keep track of your beauty purchases, check
                                your order status and view your order details.
                            </p>

                        </div>


                        {/* Order Count */}

                        {orders.length > 0 && (
                            <div
                                className="
                                    self-start
                                    md:self-auto
                                    flex
                                    items-center
                                    gap-3
                                    bg-white
                                    px-5
                                    py-4
                                    rounded-2xl
                                    shadow-[0_10px_30px_rgba(6,32,43,0.08)]
                                "
                            >

                                <div
                                    className="
                                        w-11
                                        h-11
                                        rounded-xl
                                        bg-accent/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.8"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-accent"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-xs text-secondary/40">
                                        Total Orders
                                    </p>

                                    <p className="text-lg font-bold text-secondary">
                                        {orders.length}
                                    </p>
                                </div>

                            </div>
                        )}

                    </div>

                </div>

            </section>


            {/* ================= CONTENT ================= */}

            <section className="w-full px-5 sm:px-8 pb-20">

                <div className="max-w-6xl mx-auto">

                    {/* ================= EMPTY STATE ================= */}

                    {orders.length === 0 ? (

                        <div
                            className="
                                max-w-2xl
                                mx-auto
                                bg-white
                                rounded-[2rem]
                                shadow-[0_20px_60px_rgba(6,32,43,0.08)]
                                p-10
                                md:p-14
                                text-center
                            "
                        >

                            <div
                                className="
                                    w-24
                                    h-24
                                    mx-auto
                                    rounded-full
                                    bg-accent/10
                                    flex
                                    items-center
                                    justify-center
                                "
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-10 h-10 text-accent"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.4 6.75m0 0h14.85c.75 0 1.35.684 1.156 1.408l-1.5 5.625a1.125 1.125 0 0 1-1.087.835H8.25a1.125 1.125 0 0 1-1.087-.835L5.4 6.75ZM8.25 19.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm9.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>

                            </div>

                            <h2
                                className="
                                    mt-7
                                    text-2xl
                                    md:text-3xl
                                    font-bold
                                    text-secondary
                                "
                            >
                                Your order list is empty
                            </h2>

                            <p
                                className="
                                    mt-3
                                    text-secondary/55
                                    max-w-md
                                    mx-auto
                                    leading-relaxed
                                "
                            >
                                Your beauty journey is waiting for you.
                                Explore our collection and find something
                                you'll love.
                            </p>

                            <Link
                                to="/products"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    mt-7
                                    px-7
                                    py-3.5
                                    rounded-xl
                                    bg-accent
                                    text-white
                                    font-semibold
                                    shadow-lg
                                    shadow-accent/20
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                    transition-all
                                    duration-300
                                "
                            >
                                Explore Products
                            </Link>

                        </div>

                    ) : (

                        /* ================= ORDER LIST ================= */

                        <div className="space-y-7">

                            {orders.map((order) => {

                                const status = getStatusConfig(order.status);

                                return (
                                    <article
                                        key={order.orderID}
                                        className="
                                            group
                                            bg-white
                                            rounded-[2rem]
                                            shadow-[0_15px_45px_rgba(6,32,43,0.07)]
                                            border
                                            border-secondary/5
                                            overflow-hidden
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:shadow-[0_25px_60px_rgba(6,32,43,0.11)]
                                        "
                                    >

                                        {/* ================= ORDER TOP ================= */}

                                        <div
                                            className="
                                                px-6
                                                md:px-8
                                                py-6
                                                border-b
                                                border-secondary/5
                                                flex
                                                flex-col
                                                lg:flex-row
                                                lg:items-center
                                                lg:justify-between
                                                gap-5
                                            "
                                        >

                                            <div className="flex items-center gap-4">

                                                <div
                                                    className="
                                                        hidden
                                                        sm:flex
                                                        w-12
                                                        h-12
                                                        rounded-2xl
                                                        bg-accent/10
                                                        items-center
                                                        justify-center
                                                        flex-shrink-0
                                                    "
                                                >

                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.8"
                                                        stroke="currentColor"
                                                        className="w-6 h-6 text-accent"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
                                                        />

                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
                                                        />
                                                    </svg>

                                                </div>


                                                <div>

                                                    <p
                                                        className="
                                                            text-[11px]
                                                            uppercase
                                                            tracking-[0.18em]
                                                            text-secondary/40
                                                            font-bold
                                                        "
                                                    >
                                                        Order Number
                                                    </p>

                                                    <h2
                                                        className="
                                                            text-lg
                                                            md:text-xl
                                                            font-bold
                                                            text-secondary
                                                            mt-1
                                                        "
                                                    >
                                                        {order.orderID}
                                                    </h2>

                                                    <p
                                                        className="
                                                            text-sm
                                                            text-secondary/50
                                                            mt-1
                                                        "
                                                    >
                                                        Placed on{" "}
                                                        {formatDate(order.date)}
                                                    </p>

                                                </div>

                                            </div>


                                            {/* Status + Total */}

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    justify-between
                                                    sm:justify-end
                                                    gap-6
                                                "
                                            >

                                                <span
                                                    className={`
                                                        inline-flex
                                                        items-center
                                                        gap-2
                                                        px-4
                                                        py-2
                                                        rounded-full
                                                        text-xs
                                                        font-bold
                                                        ${status.className}
                                                    `}
                                                >

                                                    <span
                                                        className={`
                                                            w-2
                                                            h-2
                                                            rounded-full
                                                            ${status.dot}
                                                        `}
                                                    />

                                                    {status.label}

                                                </span>


                                                <div className="text-right">

                                                    <p
                                                        className="
                                                            text-[11px]
                                                            uppercase
                                                            tracking-wider
                                                            text-secondary/40
                                                            font-semibold
                                                        "
                                                    >
                                                        Order Total
                                                    </p>

                                                    <p
                                                        className="
                                                            text-xl
                                                            font-bold
                                                            text-accent
                                                            mt-0.5
                                                        "
                                                    >
                                                        LKR{" "}
                                                        {formatPrice(order.total)}
                                                    </p>

                                                </div>

                                            </div>

                                        </div>


                                        {/* ================= PRODUCTS ================= */}

                                        <div className="p-6 md:p-8">

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    justify-between
                                                    mb-5
                                                "
                                            >

                                                <h3
                                                    className="
                                                        text-sm
                                                        font-bold
                                                        text-secondary
                                                        uppercase
                                                        tracking-wider
                                                    "
                                                >
                                                    Order Items
                                                </h3>

                                                <span
                                                    className="
                                                        text-xs
                                                        text-secondary/40
                                                    "
                                                >
                                                    {order.items?.length || 0}{" "}
                                                    {order.items?.length === 1
                                                        ? "item"
                                                        : "items"}
                                                </span>

                                            </div>


                                            <div className="space-y-3">

                                                {order.items?.map(
                                                    (item, index) => (

                                                        <div
                                                            key={`${order.orderID}-${item.productID}-${index}`}
                                                            className="
                                                                flex
                                                                items-center
                                                                gap-4
                                                                p-3
                                                                sm:p-4
                                                                rounded-2xl
                                                                bg-primary/50
                                                                border
                                                                border-secondary/5
                                                                transition
                                                                duration-300
                                                                hover:bg-primary
                                                            "
                                                        >

                                                            {/* Product Image */}

                                                            <div
                                                                className="
                                                                    w-20
                                                                    h-20
                                                                    sm:w-24
                                                                    sm:h-24
                                                                    rounded-2xl
                                                                    overflow-hidden
                                                                    bg-white
                                                                    flex-shrink-0
                                                                    shadow-sm
                                                                "
                                                            >

                                                                {item.image ? (

                                                                    <img
                                                                        src={item.image}
                                                                        alt={item.name}
                                                                        className="
                                                                            w-full
                                                                            h-full
                                                                            object-cover
                                                                            transition
                                                                            duration-500
                                                                            group-hover:scale-105
                                                                        "
                                                                    />

                                                                ) : (

                                                                    <div
                                                                        className="
                                                                            w-full
                                                                            h-full
                                                                            flex
                                                                            items-center
                                                                            justify-center
                                                                            text-secondary/30
                                                                        "
                                                                    >
                                                                        No Image
                                                                    </div>

                                                                )}

                                                            </div>


                                                            {/* Product Details */}

                                                            <div className="flex-1 min-w-0">

                                                                <h4
                                                                    className="
                                                                        font-bold
                                                                        text-secondary
                                                                        text-sm
                                                                        sm:text-base
                                                                        truncate
                                                                    "
                                                                >
                                                                    {item.name}
                                                                </h4>

                                                                <p
                                                                    className="
                                                                        text-xs
                                                                        text-secondary/40
                                                                        mt-1
                                                                    "
                                                                >
                                                                    Product ID:{" "}
                                                                    {item.productID}
                                                                </p>

                                                                <div
                                                                    className="
                                                                        flex
                                                                        flex-wrap
                                                                        gap-x-4
                                                                        gap-y-1
                                                                        mt-2
                                                                    "
                                                                >

                                                                    <span
                                                                        className="
                                                                            text-xs
                                                                            text-secondary/60
                                                                        "
                                                                    >
                                                                        Qty:{" "}
                                                                        <span className="font-semibold">
                                                                            {item.quantity}
                                                                        </span>
                                                                    </span>

                                                                    <span
                                                                        className="
                                                                            text-xs
                                                                            text-secondary/60
                                                                        "
                                                                    >
                                                                        Unit price:{" "}
                                                                        <span className="font-semibold">
                                                                            LKR{" "}
                                                                            {formatPrice(
                                                                                item.Price
                                                                            )}
                                                                        </span>
                                                                    </span>

                                                                </div>

                                                            </div>


                                                            {/* Item Total */}

                                                            <div className="text-right flex-shrink-0">

                                                                <p
                                                                    className="
                                                                        hidden
                                                                        sm:block
                                                                        text-[10px]
                                                                        uppercase
                                                                        tracking-wider
                                                                        text-secondary/40
                                                                    "
                                                                >
                                                                    Total
                                                                </p>

                                                                <p
                                                                    className="
                                                                        text-sm
                                                                        sm:text-base
                                                                        font-bold
                                                                        text-secondary
                                                                        mt-1
                                                                    "
                                                                >
                                                                    LKR{" "}
                                                                    {formatPrice(
                                                                        Number(
                                                                            item.Price
                                                                        ) *
                                                                        Number(
                                                                            item.quantity
                                                                        )
                                                                    )}
                                                                </p>

                                                            </div>

                                                        </div>

                                                    )
                                                )}

                                            </div>


                                            {/* ================= ORDER FOOTER ================= */}

                                            <div
                                                className="
                                                    mt-7
                                                    pt-6
                                                    border-t
                                                    border-secondary/5
                                                    grid
                                                    grid-cols-1
                                                    md:grid-cols-2
                                                    gap-6
                                                "
                                            >

                                                {/* Delivery */}

                                                <div>

                                                    <div className="flex items-center gap-2">

                                                        <div
                                                            className="
                                                                w-9
                                                                h-9
                                                                rounded-xl
                                                                bg-secondary/5
                                                                flex
                                                                items-center
                                                                justify-center
                                                            "
                                                        >

                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.7"
                                                                stroke="currentColor"
                                                                className="
                                                                    w-4
                                                                    h-4
                                                                    text-secondary
                                                                "
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                                />

                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M19.5 10.5c0 7.142-7.5 10.5-7.5 10.5S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                                                />
                                                            </svg>

                                                        </div>

                                                        <div>

                                                            <p
                                                                className="
                                                                    text-[10px]
                                                                    uppercase
                                                                    tracking-wider
                                                                    text-secondary/40
                                                                    font-bold
                                                                "
                                                            >
                                                                Delivery Address
                                                            </p>

                                                            <p
                                                                className="
                                                                    text-sm
                                                                    font-semibold
                                                                    text-secondary
                                                                    mt-0.5
                                                                "
                                                            >
                                                                {order.address ||
                                                                    "Not provided"}
                                                            </p>

                                                        </div>

                                                    </div>

                                                </div>


                                                {/* Customer */}

                                                <div>

                                                    <div className="flex items-center gap-2">

                                                        <div
                                                            className="
                                                                w-9
                                                                h-9
                                                                rounded-xl
                                                                bg-secondary/5
                                                                flex
                                                                items-center
                                                                justify-center
                                                            "
                                                        >

                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.7"
                                                                stroke="currentColor"
                                                                className="
                                                                    w-4
                                                                    h-4
                                                                    text-secondary
                                                                "
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 16.5 0"
                                                                />
                                                            </svg>

                                                        </div>

                                                        <div>

                                                            <p
                                                                className="
                                                                    text-[10px]
                                                                    uppercase
                                                                    tracking-wider
                                                                    text-secondary/40
                                                                    font-bold
                                                                "
                                                            >
                                                                Receiver
                                                            </p>

                                                            <p
                                                                className="
                                                                    text-sm
                                                                    font-semibold
                                                                    text-secondary
                                                                    mt-0.5
                                                                "
                                                            >
                                                                {order.customerName ||
                                                                    "Not provided"}
                                                            </p>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </article>
                                );
                            })}

                        </div>

                    )}

                </div>

            </section>

        </div>
    );
}