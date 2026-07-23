import axios from "axios";
import { FaChevronDown, FaChevronUp, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function CheckoutPage() {

    const location = useLocation();
    const navigate = useNavigate();

    const [cart, setCart] = useState(location.state || []);

    // Customer Details
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    function getTotal() {

        let total = 0;

        cart.forEach((item) => {
            total += item.price * item.quantity;
        });

        return total;
    }

    async function purchaseCart() {

        const token = localStorage.getItem("token");

        if (token == null) {
            toast.error("Please login to place an order");
            navigate("/login");
            return;
        }

        // Validation

        if (name.trim() === "") {
            toast.error("Please enter the receiver's name");
            return;
        }

        if (address.trim() === "") {
            toast.error("Please enter the delivery address");
            return;
        }

        try {

            const items = [];

            for (let i = 0; i < cart.length; i++) {

                items.push({
                    productID: cart[i].productID,
                    quantity: cart[i].quantity
                });

            }

            await axios.post(

                import.meta.env.VITE_API_URL + "/api/orders",

                {
                    customerName: name,
                    phone: phone,
                    address: address,
                    items: items,
                    total: getTotal()
                },

                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }

            );

            toast.success("Order placed successfully");

        } catch (error) {

            console.error(error);

            toast.error("Failed to place order");

            if (
                error.response &&
                error.response.status === 400
            ) {
                toast.error(error.response.data.message);
            }
        }
    }

    return (

        <div className="
            w-full
            min-h-[calc(100vh-100px)]
            bg-primary
            flex
            flex-col
            items-center
            pt-10
            px-5
        ">

            <h1 className="
                text-3xl
                md:text-4xl
                font-bold
                text-secondary
                mb-8
                text-center
            ">
                Checkout
            </h1>

            <div className="
                w-full
                max-w-[950px]
                flex
                flex-col
                gap-5
            ">

                {/* Continue with Part 2/4 */}
                {
    cart.map((item, index) => {

        return (

            <div
                key={index}
                className="
                    w-full
                    bg-white
                    rounded-2xl
                    shadow-lg
                    flex
                    flex-col
                    md:flex-row
                    items-center
                    p-4
                    gap-5
                    hover:shadow-2xl
                    transition
                    duration-300
                "
            >

                {/* Image */}

                <div
                    className="
                        h-[120px]
                        w-[120px]
                        rounded-xl
                        overflow-hidden
                        flex-shrink-0
                    "
                >

                    <img
                        src={item.image}
                        className="
                            h-full
                            w-full
                            object-cover
                            hover:scale-110
                            transition
                            duration-300
                        "
                    />

                </div>





                {/* Details */}

                <div
                    className="
                        flex-1
                        flex
                        flex-col
                        justify-center
                        text-center
                        md:text-left
                    "
                >

                    <h1
                        className="
                            text-xl
                            font-bold
                            text-secondary
                        "
                    >
                        {item.name}
                    </h1>

                    <span
                        className="
                            text-sm
                            text-gray-500
                            mt-2
                        "
                    >
                        Product ID : {item.productID}
                    </span>

                </div>






                {/* Quantity */}

                <div
                    className="
                        bg-secondary
                        text-white
                        rounded-xl
                        w-[90px]
                        h-[120px]
                        flex
                        flex-col
                        justify-center
                        items-center
                        gap-3
                    "
                >

                    <FaChevronUp
                        className="
                            text-xl
                            hover:text-accent
                            cursor-pointer
                        "
                        onClick={() => {

                            const newCart = [...cart];
                            newCart[index].quantity += 1;
                            setCart(newCart);

                        }}
                    />

                    <span
                        className="
                            text-3xl
                            font-bold
                        "
                    >
                        {item.quantity}
                    </span>

                    <FaChevronDown
                        className="
                            text-xl
                            hover:text-accent
                            cursor-pointer
                        "
                        onClick={() => {

                            const newCart = [...cart];

                            if (newCart[index].quantity > 1) {
                                newCart[index].quantity -= 1;
                            }

                            setCart(newCart);

                        }}
                    />

                </div>






                {/* Price */}

                <div
                    className="
                        w-full
                        md:w-[180px]
                        flex
                        flex-col
                        items-center
                        md:items-end
                    "
                >

                    {
                        item.labelledPrice > item.price &&

                        <span
                            className="
                                text-gray-400
                                line-through
                                text-sm
                            "
                        >
                            LKR {item.labelledPrice.toFixed(2)}
                        </span>

                    }

                    <span
                        className="
                            text-accent
                            text-2xl
                            font-bold
                            mt-2
                        "
                    >
                        LKR {item.price.toFixed(2)}
                    </span>

                </div>






              
            </div>

        );

    })
}

{/* Continue with Part 3/4 */}
{/* ================= Delivery Details ================= */}

<div
    className="
        w-full
        bg-white
        rounded-2xl
        shadow-xl
        p-6
        mt-2
    "
>

    <h2
        className="
            text-2xl
            font-bold
            text-secondary
            mb-6
        "
    >
        Delivery Details
    </h2>

    <p
        className="
            text-gray-500
            mb-6
        "
    >
        Please enter the receiver's information to complete your order.
    </p>

    <div
        className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
        "
    >

        {/* Full Name */}

        <div className="flex flex-col">

            <label
                className="
                    text-secondary
                    font-semibold
                    mb-2
                "
            >
                Receiver's Name
            </label>

            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                placeholder="Enter receiver's full name"
                className="
                    h-12
                    rounded-xl
                    border
                    border-gray-300
                    px-4
                    outline-none
                    transition
                    duration-300
                    focus:border-accent
                    focus:ring-2
                    focus:ring-accent/20
                "
            />

        </div>

        {/* Phone Number (Optional UI only) */}

        <div className="flex flex-col">

            <label
                className="
                    text-secondary
                    font-semibold
                    mb-2
                "
            >
                Contact Number
            </label>

            <input
    type="tel"
    value={phone}
    onChange={(e)=>{
        setPhone(e.target.value);
    }}
    placeholder="07X XXX XXXX"
    className="
        h-12
        rounded-xl
        border
        border-gray-300
        px-4
        outline-none
        transition
        duration-300
        focus:border-accent
        focus:ring-2
        focus:ring-accent/20
    "
/>

        </div>

    </div>

    {/* Address */}

    <div className="mt-6">

        <label
            className="
                text-secondary
                font-semibold
                mb-2
                block
            "
        >
            Delivery Address
        </label>

        <textarea
            rows={5}
            value={address}
            onChange={(e) => {
                setAddress(e.target.value);
            }}
            placeholder="House No, Street, City, Postal Code..."
            className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                resize-none
                outline-none
                transition
                duration-300
                focus:border-accent
                focus:ring-2
                focus:ring-accent/20
            "
        />

    </div>

</div>

{/* Continue with Part 4/4 */}
{/* ================= Cart Summary ================= */}

<div
    className="
        w-full
        bg-white
        rounded-2xl
        shadow-xl
        p-6
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-6
        mt-5
    "
>

    {/* Left Side */}

    <div className="text-center md:text-left">

        <h2
            className="
                text-2xl
                font-bold
                text-secondary
            "
        >
            Cart Summary
        </h2>

        <p
            className="
                text-gray-500
                mt-2
            "
        >
            {cart.length} item{cart.length > 1 ? "s" : ""} in your cart
        </p>

    </div>





    {/* Right Side */}

    <div
        className="
            flex
            flex-col
            items-center
            md:items-end
            w-full
            md:w-auto
        "
    >

        <span
            className="
                text-gray-500
                text-sm
            "
        >
            Total Amount
        </span>

        <span
            className="
                text-4xl
                font-bold
                text-accent
                mt-2
            "
        >
            LKR {getTotal().toFixed(2)}
        </span>

        <button

            className="
                mt-5
                w-full
                md:w-auto
                bg-secondary
                text-white
                px-10
                py-3
                rounded-xl
                font-semibold
                text-lg
                hover:bg-accent
                transition
                duration-300
                shadow-lg
            "

            onClick={purchaseCart}

        >
            Place Order
        </button>

    </div>

</div>

</div>

</div>

);
}