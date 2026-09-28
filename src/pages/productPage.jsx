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

            {/* =====================================================
                HERO / SEARCH SECTION
            ====================================================== */}

            <section
                className="
                    relative
                    w-full
                    min-h-[600px]
                    flex
                    items-center
                    overflow-hidden
                "
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,241,211,0.82), rgba(255,241,211,0.96)), url('/products-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                {/* Decorative Orange Circle */}

                <div
                    className="
                        absolute
                        -top-32
                        -right-32
                        w-[420px]
                        h-[420px]
                        rounded-full
                        bg-accent/15
                        blur-3xl
                    "
                ></div>


                {/* Decorative Navy Circle */}

                <div
                    className="
                        absolute
                        -bottom-40
                        -left-40
                        w-[500px]
                        h-[500px]
                        rounded-full
                        bg-secondary/10
                        blur-3xl
                    "
                ></div>


                {/* Hero Content */}

                <div
                    className="
                        relative
                        z-10
                        w-full
                        max-w-6xl
                        mx-auto
                        px-6
                        py-24
                    "
                >

                    {/* Small Label */}

                    <div className="flex justify-center mb-6">

                        <span
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-5
                                py-2
                                rounded-full
                                bg-white/70
                                backdrop-blur-md
                                border
                                border-accent/20
                                text-accent
                                text-xs
                                font-bold
                                tracking-[0.25em]
                                uppercase
                                shadow-sm
                            "
                        >

                            <span
                                className="
                                    w-2
                                    h-2
                                    rounded-full
                                    bg-accent
                                    animate-pulse
                                "
                            ></span>

                            Our Collection

                        </span>

                    </div>


                    {/* Main Heading */}

                    <div className="text-center">

                        <h1
                            className="
                                text-5xl
                                md:text-6xl
                                lg:text-7xl
                                font-bold
                                text-secondary
                                tracking-tight
                                leading-[1.05]
                            "
                        >
                            Discover Your

                            <span
                                className="
                                    block
                                    text-accent
                                    mt-2
                                "
                            >
                                Beauty Essentials
                            </span>

                        </h1>


                        <p
                            className="
                                max-w-2xl
                                mx-auto
                                mt-6
                                text-secondary/65
                                text-sm
                                md:text-base
                                leading-7
                            "
                        >
                            Explore our carefully selected collection of
                            skincare, makeup, haircare, fragrances and
                            beauty essentials designed to make you feel
                            confident and beautiful.
                        </p>

                    </div>


                    {/* =================================================
                        SEARCH BOX
                    ================================================== */}

                    <div
                        className="
                            max-w-3xl
                            mx-auto
                            mt-10
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                mb-3
                                px-2
                            "
                        >

                            <span
                                className="
                                    text-sm
                                    font-semibold
                                    text-secondary
                                "
                            >
                                Search our collection
                            </span>


                            {!isLoading && (

                                <span
                                    className="
                                        text-xs
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


                        {/* Search Input */}

                        <div
                            className="
                                group
                                relative
                                w-full
                                h-[68px]
                                bg-white/85
                                backdrop-blur-xl
                                rounded-[22px]
                                border
                                border-white
                                shadow-[0_20px_60px_rgba(6,32,43,0.12)]
                                transition-all
                                duration-500
                                focus-within:-translate-y-1
                                focus-within:shadow-[0_25px_70px_rgba(255,106,28,0.20)]
                            "
                        >

                            {/* Search Icon */}

                            <div
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    w-11
                                    h-11
                                    rounded-xl
                                    bg-accent/10
                                    flex
                                    items-center
                                    justify-center
                                    transition-all
                                    duration-300
                                    group-focus-within:bg-accent
                                "
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="
                                        w-5
                                        h-5
                                        text-accent
                                        group-focus-within:text-white
                                        transition
                                    "
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

                                        if (e.target.value === "") {

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

                                    } catch (error) {

                                        console.error(error);

                                        toast.error(
                                            "Search Failed"
                                        );

                                    }

                                }}
                                placeholder="Search skincare, makeup, haircare..."
                                className="
                                    w-full
                                    h-full
                                    pl-[78px]
                                    pr-6
                                    bg-transparent
                                    outline-none
                                    border-none
                                    text-secondary
                                    text-base
                                    placeholder:text-secondary/35
                                    rounded-[22px]
                                "
                            />

                        </div>


                        {/* Popular Categories */}

                        <div
                            className="
                                flex
                                flex-wrap
                                justify-center
                                gap-2
                                mt-5
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
                                Explore:
                            </span>


                            {[
                                "Skincare",
                                "Makeup",
                                "Haircare",
                                "Fragrances"
                            ].map((category) => (

                                <button
                                    key={category}
                                    type="button"
                                    className="
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-white/60
                                        backdrop-blur
                                        border
                                        border-secondary/5
                                        text-secondary/60
                                        text-xs
                                        font-medium
                                        hover:bg-accent
                                        hover:text-white
                                        hover:border-accent
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                    "
                                >
                                    {category}
                                </button>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PRODUCTS SECTION
            ====================================================== */}

            <section
                className="
                    relative
                    w-full
                    px-6
                    py-20
                    bg-primary
                "
            >

                <div className="max-w-7xl mx-auto">


                    {/* Section Heading */}

                    <div
                        className="
                            flex
                            flex-col
                            md:flex-row
                            md:items-end
                            md:justify-between
                            gap-4
                            mb-12
                        "
                    >

                        <div>

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    mb-3
                                "
                            >

                                <div
                                    className="
                                        w-10
                                        h-[3px]
                                        rounded-full
                                        bg-accent
                                    "
                                ></div>

                                <span
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-[0.2em]
                                        font-bold
                                        text-accent
                                    "
                                >
                                    Beauty Collection
                                </span>

                            </div>


                            <h2
                                className="
                                    text-3xl
                                    md:text-4xl
                                    font-bold
                                    text-secondary
                                "
                            >
                                Shop Our Products
                            </h2>


                            <p
                                className="
                                    mt-3
                                    text-sm
                                    text-secondary/50
                                    max-w-lg
                                "
                            >
                                Find something special for your everyday
                                beauty routine.
                            </p>

                        </div>


                        {!isLoading && (

                            <div
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    self-start
                                    md:self-auto
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-white
                                    border
                                    border-secondary/5
                                    shadow-sm
                                    text-sm
                                    text-secondary/60
                                "
                            >

                                <span
                                    className="
                                        w-2
                                        h-2
                                        rounded-full
                                        bg-accent
                                    "
                                ></span>

                                {products.length}{" "}
                                {products.length === 1
                                    ? "product available"
                                    : "products available"}

                            </div>

                        )}

                    </div>


                    {/* =================================================
                        LOADING
                    ================================================== */}

                    {isLoading ? (

                        <div
                            className="
                                flex
                                justify-center
                                items-center
                                min-h-[350px]
                            "
                        >

                            <Loader />

                        </div>

                    ) : products.length > 0 ? (

                        /* =================================================
                           PRODUCT GRID
                        ================================================== */

                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                md:grid-cols-3
                                lg:grid-cols-4
                                gap-7
                            "
                        >

                            {products.map((item, index) => (

                                <div
                                    key={item.productID}
                                    className="
                                        animate-fadeIn
                                        transition-all
                                        duration-500
                                        hover:-translate-y-2
                                    "
                                    style={{
                                        animationDelay:
                                            `${index * 0.07}s`,
                                        animationFillMode:
                                            "both"
                                    }}
                                >

                                    <ProductCard
                                        product={item}
                                    />

                                </div>

                            ))}

                        </div>

                    ) : (

                        /* =================================================
                           NO PRODUCTS
                        ================================================== */

                        <div
                            className="
                                min-h-[350px]
                                rounded-[30px]
                                bg-white/50
                                backdrop-blur
                                border
                                border-secondary/10
                                flex
                                flex-col
                                items-center
                                justify-center
                                text-center
                                px-6
                                shadow-sm
                            "
                        >

                            <div
                                className="
                                    w-20
                                    h-20
                                    rounded-full
                                    bg-accent/10
                                    flex
                                    items-center
                                    justify-center
                                    mb-6
                                "
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.8"
                                    stroke="currentColor"
                                    className="
                                        w-9
                                        h-9
                                        text-accent
                                    "
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
                                    text-2xl
                                    font-bold
                                    text-secondary
                                "
                            >
                                No products found
                            </h3>


                            <p
                                className="
                                    mt-3
                                    text-sm
                                    text-secondary/55
                                "
                            >
                                Try searching with a different product name.
                            </p>

                        </div>

                    )}

                </div>

            </section>


            {/* =====================================================
                BOTTOM BEAUTY BANNER
            ====================================================== */}

            <section
                className="
                    relative
                    mx-6
                    mb-20
                    max-w-7xl
                    lg:mx-auto
                    overflow-hidden
                    rounded-[32px]
                    bg-secondary
                    px-8
                    py-14
                    md:px-14
                "
            >

                {/* Orange glow */}

                <div
                    className="
                        absolute
                        -right-20
                        -top-20
                        w-64
                        h-64
                        rounded-full
                        bg-accent/30
                        blur-3xl
                    "
                ></div>


                <div
                    className="
                        absolute
                        -left-20
                        -bottom-20
                        w-60
                        h-60
                        rounded-full
                        bg-primary/10
                        blur-3xl
                    "
                ></div>


                <div
                    className="
                        relative
                        z-10
                        max-w-2xl
                    "
                >

                    <span
                        className="
                            text-accent
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.25em]
                        "
                    >
                        Crystal Beauty Clear
                    </span>


                    <h2
                        className="
                            mt-4
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-primary
                        "
                    >
                        Beauty made simple.
                        <span className="text-accent">
                            {" "}Beauty made for you.
                        </span>
                    </h2>


                    <p
                        className="
                            mt-4
                            text-primary/60
                            text-sm
                            leading-7
                        "
                    >
                        Discover products that fit your beauty routine
                        and express your unique style.
                    </p>

                </div>

            </section>

        </div>

    );
}