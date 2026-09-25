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

            {/* ================= HEADER / HERO ================= */}
            <section className="w-full px-6 pt-28 pb-12">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-10">

                        <p className="text-accent uppercase tracking-[0.25em] text-sm font-semibold mb-3">
                            Discover Your Beauty
                        </p>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary">
                            Explore Our Collection
                        </h1>

                        <p className="mt-4 text-secondary/70 max-w-2xl mx-auto text-sm md:text-base">
                            Find your favorite beauty essentials, carefully selected
                            to bring out your natural beauty.
                        </p>

                    </div>

                    {/* ================= SEARCH BAR ================= */}
                    <div className="flex justify-center">

                        <div className="relative w-full max-w-2xl group">

                            {/* Search Icon */}
                            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-secondary/50 group-focus-within:text-accent transition-colors duration-300"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.6 10.6Z"
                                    />
                                </svg>
                            </div>

                            <input
                                type="text"
                                onChange={async (e) => {
                                    try {
                                        if (e.target.value == "") {
                                            setLoading(true);
                                        } else {
                                            const searchResults = await axios.get(
                                                import.meta.env.VITE_API_URL +
                                                "/api/products/search/" +
                                                e.target.value
                                            );

                                            setProducts(searchResults.data);
                                        }
                                    } catch {
                                        toast.error("Search Failed");
                                    }
                                }}
                                placeholder="Search for skincare, makeup, haircare..."
                                className="
                                    w-full
                                    pl-14
                                    pr-6
                                    py-4
                                    rounded-2xl
                                    bg-white/70
                                    backdrop-blur-sm
                                    border
                                    border-secondary/10
                                    text-secondary
                                    placeholder:text-secondary/40
                                    outline-none
                                    shadow-[0_10px_30px_rgba(6,32,43,0.08)]
                                    transition-all
                                    duration-300
                                    focus:border-accent
                                    focus:bg-white
                                    focus:shadow-[0_12px_35px_rgba(255,106,28,0.15)]
                                "
                            />

                        </div>

                    </div>

                </div>
            </section>


            {/* ================= PRODUCTS SECTION ================= */}
            <section className="w-full px-6 pb-16">

                <div className="max-w-7xl mx-auto">

                    {/* Product heading */}
                    <div className="flex items-center justify-between mb-7">

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                                Our Products
                            </h2>

                            <div className="mt-2 w-12 h-1 rounded-full bg-accent"></div>
                        </div>

                        {!isLoading && (
                            <span className="text-sm text-secondary/60">
                                {products.length}{" "}
                                {products.length === 1 ? "product" : "products"}
                            </span>
                        )}

                    </div>


                    {/* ================= PRODUCT CARDS ================= */}
                    {isLoading ? (
                        <div className="flex justify-center items-center min-h-[300px]">
                            <Loader />
                        </div>
                    ) : products.length > 0 ? (
                        <div className="
                            w-full
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            md:grid-cols-3
                            lg:grid-cols-4
                            gap-6
                        ">
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

                        /* ================= EMPTY SEARCH RESULT ================= */
                        <div className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            min-h-[300px]
                            rounded-3xl
                            border
                            border-secondary/10
                            bg-white/40
                            px-6
                            text-center
                        ">

                            <div className="
                                w-16
                                h-16
                                rounded-full
                                bg-accent/10
                                flex
                                items-center
                                justify-center
                                mb-5
                            ">
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

                            <h3 className="text-xl font-semibold text-secondary">
                                No products found
                            </h3>

                            <p className="mt-2 text-sm text-secondary/60">
                                Try searching with a different product name.
                            </p>

                        </div>
                    )}

                </div>

            </section>

        </div>
    );
}