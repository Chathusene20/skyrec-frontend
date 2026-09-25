import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/productCard.jsx";

export function HomePagee() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_API_URL + "/api/products")
            .then((response) => {
                setProducts(response.data.slice(0, 8));
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Failed to load products:", error);
                setIsLoading(false);
            });
    }, []);

    const categories = [
        {
            name: "Skincare",
            icon: "✨",
            description: "Care for your natural beauty",
        },
        {
            name: "Makeup",
            icon: "💄",
            description: "Express your unique style",
        },
        {
            name: "Haircare",
            icon: "💇‍♀️",
            description: "Healthy and beautiful hair",
        },
        {
            name: "Fragrances",
            icon: "🌸",
            description: "Beautiful scents for you",
        },
        {
            name: "Beauty Tools",
            icon: "🪞",
            description: "Tools for your beauty routine",
        },
    ];

    const features = [
        {
            icon: "💎",
            title: "Quality Products",
            description:
                "We carefully select beauty products that bring quality and value to you.",
        },
        {
            icon: "💰",
            title: "Affordable Prices",
            description:
                "Enjoy your favorite beauty products at prices that fit your budget.",
        },
        {
            icon: "🚚",
            title: "Easy Shopping",
            description:
                "Browse, choose and order your favorite products with ease.",
        },
        {
            icon: "❤️",
            title: "Customer First",
            description:
                "Your satisfaction and shopping experience are important to us.",
        },
    ];

    return (
        <div className="w-full bg-primary text-secondary overflow-hidden">

            {/* ===================================================== */}
            {/* HERO SECTION */}
            {/* ===================================================== */}

            <section
                className="relative min-h-[700px] flex items-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('/bg.jpg')",
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-secondary/75"></div>

                {/* Decorative circles */}
                <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-accent/20 blur-3xl animate-float"></div>

                <div
                    className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-accent/10 blur-3xl animate-pulseGlow"
                ></div>

                {/* Hero content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">

                    <div className="max-w-3xl">

                        <p className="text-accent font-semibold uppercase tracking-[0.3em] mb-5 animate-fadeInDown">
                            Crystal Beauty Clear
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white animate-fadeInUp">
                            Your Beauty.
                            <br />

                            <span className="text-accent">
                                Your Choice.
                            </span>
                        </h1>

                        <p
                            className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed animate-fadeInUp"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Discover beauty products made to help you
                            feel confident, beautiful and completely
                            yourself.
                        </p>

                        <div
                            className="flex flex-wrap gap-4 mt-8 animate-fadeInUp"
                            style={{ animationDelay: "0.4s" }}
                        >

                            <button
                                onClick={() => navigate("/products")}
                                className="
                                    px-8 py-4
                                    rounded-full
                                    bg-accent
                                    text-white
                                    font-semibold
                                    shadow-lg
                                    shadow-accent/30
                                    hover:scale-105
                                    hover:shadow-accent/50
                                    transition-all
                                    duration-300
                                "
                            >
                                Shop Now →
                            </button>

                            <button
                                onClick={() => navigate("/about")}
                                className="
                                    px-8 py-4
                                    rounded-full
                                    border-2
                                    border-white/70
                                    text-white
                                    font-semibold
                                    hover:bg-white
                                    hover:text-secondary
                                    transition-all
                                    duration-300
                                "
                            >
                                Discover More
                            </button>

                        </div>
                    </div>
                </div>

                {/* Bottom wave-like section */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-primary rounded-t-[50%]"></div>
            </section>


            {/* ===================================================== */}
            {/* SHOP BY CATEGORY */}
            {/* ===================================================== */}

            <section className="py-20 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">

                        <p className="text-accent font-semibold uppercase tracking-widest">
                            Explore
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-2">
                            Shop by Category
                        </h2>

                        <p className="text-secondary/65 max-w-2xl mx-auto mt-4">
                            Find everything you need for your beauty
                            routine in one place.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                        {categories.map((category, index) => (

                            <div
                                key={category.name}
                                onClick={() => navigate("/products")}
                                className="
                                    group
                                    cursor-pointer
                                    bg-white/70
                                    border
                                    border-secondary/10
                                    rounded-3xl
                                    p-7
                                    text-center
                                    shadow-sm
                                    hover:-translate-y-3
                                    hover:shadow-xl
                                    hover:border-accent/40
                                    transition-all
                                    duration-500
                                    animate-fadeInUp
                                "
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >

                                <div
                                    className="
                                        w-20 h-20
                                        mx-auto
                                        rounded-full
                                        bg-secondary
                                        flex
                                        items-center
                                        justify-center
                                        text-4xl
                                        group-hover:bg-accent
                                        group-hover:scale-110
                                        transition-all
                                        duration-300
                                    "
                                >
                                    {category.icon}
                                </div>

                                <h3 className="text-xl font-bold mt-5 text-secondary">
                                    {category.name}
                                </h3>

                                <p className="text-sm text-secondary/60 mt-2">
                                    {category.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* ===================================================== */}
            {/* FEATURED PRODUCTS */}
            {/* ===================================================== */}

            <section className="py-20 px-6 bg-white/40">

                <div className="max-w-7xl mx-auto">

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">

                        <div>

                            <p className="text-accent font-semibold uppercase tracking-widest">
                                Our Collection
                            </p>

                            <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-2">
                                Featured Products
                            </h2>

                            <p className="text-secondary/65 mt-4 max-w-xl">
                                Discover some of our most beautiful and
                                popular beauty products.
                            </p>

                        </div>

                        <button
                            onClick={() => navigate("/products")}
                            className="
                                px-6 py-3
                                rounded-full
                                border-2
                                border-accent
                                text-accent
                                font-semibold
                                hover:bg-accent
                                hover:text-white
                                transition-all
                                duration-300
                            "
                        >
                            View All Products →
                        </button>

                    </div>


                    {isLoading ? (

                        <div className="flex justify-center items-center py-20">

                            <div
                                className="
                                    w-12 h-12
                                    border-4
                                    border-secondary/20
                                    border-t-accent
                                    rounded-full
                                    animate-spin
                                "
                            ></div>

                        </div>

                    ) : products.length > 0 ? (

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                            {products.map((product, index) => (

                                <div
                                    key={product.productID}
                                    className="animate-fadeInUp"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    <ProductCard product={product} />
                                </div>

                            ))}

                        </div>

                    ) : (

                        <div className="text-center py-16">

                            <p className="text-secondary/60">
                                No products available at the moment.
                            </p>

                        </div>

                    )}

                </div>

            </section>


            {/* ===================================================== */}
            {/* SPECIAL COLLECTION */}
            {/* ===================================================== */}

            <section className="py-24 px-6">

                <div className="max-w-6xl mx-auto">

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[2rem]
                            bg-secondary
                            px-8
                            py-16
                            md:px-16
                            shadow-2xl
                        "
                    >

                        {/* Decorative circles */}

                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>

                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>


                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

                            <div>

                                <p className="text-accent font-semibold uppercase tracking-widest">
                                    Special Collection
                                </p>

                                <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
                                    Beauty that feels
                                    <span className="text-accent">
                                        {" "}like you.
                                    </span>
                                </h2>

                                <p className="text-white/70 mt-6 leading-relaxed">
                                    Explore our carefully selected beauty
                                    collection and discover products that
                                    fit your personal style.
                                </p>

                                <button
                                    onClick={() => navigate("/products")}
                                    className="
                                        mt-8
                                        px-7 py-3
                                        rounded-full
                                        bg-accent
                                        text-white
                                        font-semibold
                                        hover:scale-105
                                        transition-all
                                        duration-300
                                    "
                                >
                                    Explore Collection
                                </button>

                            </div>


                            <div className="flex justify-center">

                                <div className="relative">

                                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulseGlow"></div>

                                    <img
                                        src="/skyrec logo.png"
                                        alt="Crystal Beauty Clear"
                                        className="
                                            relative
                                            w-64
                                            md:w-80
                                            object-contain
                                            animate-float
                                        "
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ===================================================== */}
            {/* WHY CHOOSE US */}
            {/* ===================================================== */}

            <section className="py-20 px-6 bg-white/40">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">

                        <p className="text-accent font-semibold uppercase tracking-widest">
                            Why Us
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-2">
                            Why Choose Crystal Beauty Clear?
                        </h2>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {features.map((feature, index) => (

                            <div
                                key={feature.title}
                                className="
                                    bg-primary
                                    border
                                    border-secondary/10
                                    rounded-3xl
                                    p-8
                                    text-center
                                    hover:-translate-y-2
                                    hover:shadow-xl
                                    transition-all
                                    duration-500
                                    animate-fadeInUp
                                "
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >

                                <div className="text-5xl mb-5">
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold text-secondary">
                                    {feature.title}
                                </h3>

                                <p className="text-secondary/60 mt-3 leading-relaxed">
                                    {feature.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* ===================================================== */}
            {/* ABOUT BRAND */}
            {/* ===================================================== */}

            <section className="py-24 px-6">

                <div className="max-w-6xl mx-auto">

                    <div className="grid md:grid-cols-2 gap-14 items-center">

                        {/* Logo */}

                        <div className="flex justify-center">

                            <div
                                className="
                                    relative
                                    w-full
                                    max-w-md
                                    min-h-[350px]
                                    rounded-[2rem]
                                    bg-secondary
                                    flex
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    shadow-2xl
                                "
                            >

                                <div className="absolute w-60 h-60 bg-accent/20 rounded-full blur-3xl animate-pulseGlow"></div>

                                <img
                                    src="/skyrec logo.png"
                                    alt="Crystal Beauty Clear"
                                    className="
                                        relative
                                        z-10
                                        w-64
                                        object-contain
                                        animate-float
                                    "
                                />

                            </div>

                        </div>


                        {/* Text */}

                        <div>

                            <p className="text-accent font-semibold uppercase tracking-widest">
                                About Us
                            </p>

                            <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-3">
                                Beauty made
                                <span className="text-accent">
                                    {" "}accessible.
                                </span>
                            </h2>

                            <p className="text-secondary/70 mt-6 leading-relaxed">
                                Crystal Beauty Clear is a beauty platform
                                created to make quality beauty products
                                accessible to everyone.
                            </p>

                            <p className="text-secondary/70 mt-4 leading-relaxed">
                                From skincare and makeup to haircare,
                                fragrances and beauty tools, we bring
                                different beauty essentials together
                                in one convenient place.
                            </p>

                            <button
                                onClick={() => navigate("/about")}
                                className="
                                    mt-8
                                    px-7 py-3
                                    rounded-full
                                    bg-secondary
                                    text-white
                                    font-semibold
                                    hover:bg-accent
                                    hover:scale-105
                                    transition-all
                                    duration-300
                                "
                            >
                                Learn More →
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* ===================================================== */}
            {/* FINAL CTA */}
            {/* ===================================================== */}

            <section className="px-6 pb-24">

                <div
                    className="
                        max-w-6xl
                        mx-auto
                        rounded-[2rem]
                        bg-accent
                        px-8
                        py-16
                        text-center
                        shadow-2xl
                        relative
                        overflow-hidden
                    "
                >

                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>

                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full"></div>

                    <div className="relative z-10">

                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Ready to discover your beauty?
                        </h2>

                        <p className="text-white/85 mt-5 max-w-2xl mx-auto">
                            Explore our collection and find something
                            that makes you feel confident and beautiful.
                        </p>

                        <button
                            onClick={() => navigate("/products")}
                            className="
                                mt-8
                                px-9 py-4
                                rounded-full
                                bg-secondary
                                text-white
                                font-semibold
                                shadow-lg
                                hover:scale-105
                                transition-all
                                duration-300
                            "
                        >
                            Start Shopping →
                        </button>

                    </div>

                </div>

            </section>


            {/* ===================================================== */}
            {/* FOOTER */}
            {/* ===================================================== */}

            <footer className="bg-secondary text-white px-6 py-14">

                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* Brand */}

                        <div>

                            <img
                                src="/skyrec logo.png"
                                alt="Crystal Beauty Clear"
                                className="w-40 object-contain mb-5"
                            />

                            <p className="text-white/60 leading-relaxed">
                                Making quality beauty accessible
                                to every eye, lip and face.
                            </p>

                        </div>


                        {/* Quick Links */}

                        <div>

                            <h3 className="text-xl font-semibold text-accent mb-5">
                                Quick Links
                            </h3>

                            <div className="flex flex-col gap-3">

                                <button
                                    onClick={() => navigate("/")}
                                    className="text-left text-white/70 hover:text-accent transition"
                                >
                                    Home
                                </button>

                                <button
                                    onClick={() => navigate("/products")}
                                    className="text-left text-white/70 hover:text-accent transition"
                                >
                                    Products
                                </button>

                                <button
                                    onClick={() => navigate("/about")}
                                    className="text-left text-white/70 hover:text-accent transition"
                                >
                                    About Us
                                </button>

                                <button
                                    onClick={() => navigate("/contact")}
                                    className="text-left text-white/70 hover:text-accent transition"
                                >
                                    Contact
                                </button>

                            </div>

                        </div>


                        {/* Contact */}

                        <div>

                            <h3 className="text-xl font-semibold text-accent mb-5">
                                Contact Us
                            </h3>

                            <div className="space-y-3 text-white/70">

                                <p>📧 chathuminisenethya246@gmail.com</p>

                                <p>📱 +94 74 024 9751</p>

                                <p>📍 Sri Lanka</p>

                            </div>

                        </div>

                    </div>


                    <div className="border-t border-white/10 mt-10 pt-8 text-center">

                        <p className="text-white/50 text-sm">
                            © {new Date().getFullYear()} Crystal Beauty Clear.
                            All rights reserved.
                        </p>

                    </div>

                </div>

            </footer>

        </div>
    );
}