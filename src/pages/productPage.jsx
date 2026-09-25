import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Loader } from "../components/loader";
import ProductCard from "../components/productCard.jsx";

export function ProductPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            axios
                .get(import.meta.env.VITE_API_URL + "/api/products")
                .then((response) => {
                    setProducts(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                    toast.error("Failed to load products");
                });
        }
    }, [isLoading]);

    return (
        <div className="w-full min-h-screen bg-primary text-secondary">

            {/* ================= SEARCH / HERO SECTION ================= */}
            <section className="w-full px-6 pt-24 pb-16">
                <div className="max-w-6xl mx-auto">

                    {/* Small Label */}
                    <div className="text-center mb-5">
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
                            Our Collection
                        </span>
                    </div>

                    {/* Main Heading */}
                    <div className="text-center mb-10">

                        <h1
                            className="
                                text-4xl
                                md:text-5xl
                                lg:text-6xl
                                font-bold
                                text-secondary
                                tracking-tight
                            "
                        >
                            Find Something You Love
                        </h1>

                        <p
                            className="
                                mt-4
                                text-secondary/60
                                text-sm
                                md:text-base
                                max-w-xl
                                mx-auto
                                leading-relaxed
                            "
                        >
                            Discover skincare, makeup, haircare, fragrances
                            and beauty essentials made for you.
                        </p>

                    </div>


                    {/* ================= SEARCH BAR ================= */}
                    <div className="flex justify-center">

                        <div className="w-full max-w-3xl">

                            {/* Search Label */}
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    mb-3
                                    px-1
                                "
                            >

                                <label
                                    className="
                                        text-sm
                                        font-semibold
                                        text-secondary
                                    "
                                >
                                    Search products
                                </label>

                                {!isLoading && (
                                    <span
                                        className="
                                            text-xs
                                            text-secondary/50
                                        "
                                    >
                                        {products.length}{" "}
                                        {products.length === 1
                                            ? "result"
                                            : "results"}
                                    </span>
                                )}

                            </div>


                            {/* Search Input Container */}
                            <div
                                className="
                                    relative
                                    flex
                                    items-center
                                    w-full
                                    h-[64px]
                                    bg-white
                                    rounded-2xl
                                    border-2
                                    border-secondary/10
                                    shadow-[0_12px_35px_rgba(6,32,43,0.10)]
                                    transition-all
                                    duration-300
                                    focus-within:border-accent
                                    focus-within:shadow-[0_15px_40px_rgba(255,106,28,0.18)]
                                    focus-within:-translate-y-1
                                "
                            >

                                {/* Search Icon */}
                                <div
                                    className="
                                        absolute
                                        left-5
                                        flex
                                        items-center
                                        justify-center
                                        w-10
                                        h-10
                                        rounded-xl
                                        bg-accent/10
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-accent"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.6 10.6Z"
                                        />
                                    </svg>
                                </div>


                                {/* Search Input */}
                                <input
                                    type="text"
                                    onChange={async (e) => {
                                        try {
                                            if (e.target.value == "") {
                                                setLoading(true);
                                            } else {
                                                const searchResults =
                                                    await axios.get(
                                                        import.meta.env
                                                            .VITE_API_URL +
                                                        "/api/products/search/" +
                                                        e.target.value
                                                    );

                                                setProducts(
                                                    searchResults.data
                                                );
                                            }
                                        } catch {
                                            toast.error("Search Failed");
                                        }
                                    }}
                                    placeholder="Search for skincare, makeup, haircare..."
                                    className="
                                        w-full
                                        h-full
                                        pl-20
                                        pr-6
                                        bg-transparent
                                        outline-none
                                        border-none
                                        text-secondary
                                        text-base
                                        placeholder:text-secondary/40
                                        rounded-2xl
                                    "
                                />

                            </div>


                            {/* Popular Search Categories */}
                            <div
                                className="
                                    flex
                                    flex-wrap
                                    justify-center
                                    items-center
                                    gap-2
                                    mt-4
                                "
                            >

                                <span
                                    className="
                                        text-xs
                                        text-secondary/40
                                        mr-1
                                        py-2
                                    "
                                >
                                    Popular:
                                </span>

                                <span
                                    className="
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-secondary/5
                                        text-secondary/60
                                        text-xs
                                    "
                                >
                                    Skincare
                                </span>

                                <span
                                    className="
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-secondary/5
                                        text-secondary/60
                                        text-xs
                                    "
                                >
                                    Makeup
                                </span>

                                <span
                                    className="
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-secondary/5
                                        text-secondary/60
                                        text-xs
                                    "
                                >
                                    Haircare
                                </span>

                                <span
                                    className="
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-secondary/5
                                        text-secondary/60
                                        text-xs
                                    "
                                >
                                    Fragrances
                                </span>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* ================= PRODUCTS SECTION ================= */}
            <section className="w-full px-6 pb-20">

                <div className="max-w-7xl mx-auto">

                    {/* Products Heading */}
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            mb-8
                        "
                    >

                        <div>

                            <h2
                                className="
                                    text-2xl
                                    md:text-3xl
                                    font-bold
                                    text-secondary
                                "
                            >
                                Our Products
                            </h2>

                            <div
                                className="
                                    mt-2
                                    w-12
                                    h-1
                                    rounded-full
                                    bg-accent
                                "
                            ></div>

                        </div>

                        {!isLoading && (
                            <span
                                className="
                                    text-sm
                                    text-secondary/50
                                "
                            >
                                {products.length}{" "}
                                {products.length === 1
                                    ? "product"
                                    : "products"}
                            </span>
                        )}

                    </div>


                    {/* ================= PRODUCTS ================= */}
                    {isLoading ? (

                        <div
                            className="
                                flex
                                justify-center
                                items-center
                                min-h-[300px]
                            "
                        >
                            <Loader />
                        </div>

                    ) : products.length > 0 ? (

                        <div
                            className="
                                w-full
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                md:grid-cols-3
                                lg:grid-cols-4
                                gap-6
                            "
                        >

                            {products.map((item) => {

                                console.log(item);

                                return (
                                    <ProductCard
                                        key={item.productID}
                                        product={item}
                                    />
                                );

                            })}

                        </div>

                    ) : (

                        /* ================= NO RESULTS ================= */
                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                min-h-[320px]
                                rounded-3xl
                                border
                                border-secondary/10
                                bg-white/40
                                px-6
                                text-center
                            "
                        >

                            {/* Search Icon */}
                            <div
                                className="
                                    w-16
                                    h-16
                                    rounded-full
                                    bg-accent/10
                                    flex
                                    items-center
                                    justify-center
                                    mb-5
                                "
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.8"
                                    stroke="currentColor"
                                    className="w-7 h-7 text-accent"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.6 10.6Z"
                                    />
                                </svg>

                            </div>


                            <h3
                                className="
                                    text-xl
                                    font-semibold
                                    text-secondary
                                "
                            >
                                No products found
                            </h3>


                            <p
                                className="
                                    mt-2
                                    text-sm
                                    text-secondary/60
                                "
                            >
                                Try searching with a different product name.
                            </p>

                        </div>

                    )}

                </div>

            </section>

        </div>
    );
}