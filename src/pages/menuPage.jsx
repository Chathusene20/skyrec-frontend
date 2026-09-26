import { Link } from "react-router-dom";

export default function MenuPage() {
    const categories = [
        {
            name: "Skincare",
            icon: "✨",
            description: "Care for your natural beauty",
            link: "/products?category=Skincare",
        },
        {
            name: "Makeup",
            icon: "💄",
            description: "Express your unique style",
            link: "/products?category=Makeup",
        },
        {
            name: "Haircare",
            icon: "💇‍♀️",
            description: "Healthy and beautiful hair",
            link: "/products?category=Haircare",
        },
        {
            name: "Fragrances",
            icon: "🌸",
            description: "Beautiful scents for you",
            link: "/products?category=Fragrances",
        },
        {
            name: "Beauty Tools",
            icon: "🪞",
            description: "Tools for your beauty routine",
            link: "/products?category=Beauty%20Tools",
        },
    ];

    return (
        <div
            className="min-h-screen bg-primary text-secondary"
            style={{
                backgroundImage: "url('/bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Background Overlay */}
            <div className="min-h-screen bg-primary/90 px-5 py-10 md:px-10 lg:px-16">

                {/* ================= HEADER ================= */}
                <div className="text-center max-w-3xl mx-auto mb-12">

                    <p className="text-accent font-semibold uppercase tracking-[4px] text-sm mb-3">
                        Crystal Beauty Clear
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
                        Explore Our Menu
                    </h1>

                    <p className="text-secondary/70 text-base md:text-lg leading-relaxed">
                        Discover beauty products, collections and everything
                        you need for your beauty routine.
                    </p>

                </div>

                {/* ================= ALL PRODUCTS ================= */}
                <section className="max-w-6xl mx-auto mb-12">

                    <Link
                        to="/products"
                        className="group block bg-secondary text-white rounded-3xl p-7 md:p-9 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

                            <div className="flex items-center gap-5">

                                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                    🛍️
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold">
                                        All Products
                                    </h2>

                                    <p className="text-white/70 mt-1">
                                        Explore our complete beauty collection
                                    </p>
                                </div>

                            </div>

                            <div className="text-3xl group-hover:translate-x-2 transition-transform">
                                →
                            </div>

                        </div>
                    </Link>

                </section>

                {/* ================= CATEGORIES ================= */}
                <section className="max-w-6xl mx-auto mb-14">

                    <div className="flex items-center justify-between mb-6">

                        <div>
                            <p className="text-accent font-semibold uppercase tracking-wider text-sm">
                                Discover
                            </p>

                            <h2 className="text-2xl md:text-3xl font-bold">
                                Shop by Category
                            </h2>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

                        {categories.map((category) => (
                            <Link
                                key={category.name}
                                to={category.link}
                                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md border border-secondary/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                            >

                                <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>

                                <h3 className="text-lg font-bold mb-2">
                                    {category.name}
                                </h3>

                                <p className="text-sm text-secondary/60 leading-relaxed">
                                    {category.description}
                                </p>

                                <div className="mt-4 text-accent font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    Explore →
                                </div>

                            </Link>
                        ))}

                    </div>

                </section>

                {/* ================= FEATURED ================= */}
                <section className="max-w-6xl mx-auto mb-14">

                    <div className="mb-6">
                        <p className="text-accent font-semibold uppercase tracking-wider text-sm">
                            Highlights
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold">
                            Featured Collections
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        {/* New Arrivals */}
                        <Link
                            to="/products"
                            className="group bg-white rounded-2xl p-7 shadow-md border border-secondary/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                                🆕
                            </div>

                            <h3 className="text-xl font-bold mb-2">
                                New Arrivals
                            </h3>

                            <p className="text-secondary/60">
                                Discover our latest beauty products and
                                collections.
                            </p>

                            <div className="mt-5 text-accent font-semibold">
                                Shop Now →
                            </div>
                        </Link>

                        {/* Best Sellers */}
                        <Link
                            to="/products"
                            className="group bg-accent text-white rounded-2xl p-7 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                                ⭐
                            </div>

                            <h3 className="text-xl font-bold mb-2">
                                Best Sellers
                            </h3>

                            <p className="text-white/80">
                                Explore popular beauty products loved by
                                our customers.
                            </p>

                            <div className="mt-5 font-semibold">
                                Explore →
                            </div>
                        </Link>

                        {/* Special Offers */}
                        <Link
                            to="/products"
                            className="group bg-secondary text-white rounded-2xl p-7 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                                🎁
                            </div>

                            <h3 className="text-xl font-bold mb-2">
                                Special Offers
                            </h3>

                            <p className="text-white/70">
                                Check out our latest deals and special
                                offers.
                            </p>

                            <div className="mt-5 text-accent font-semibold">
                                View Offers →
                            </div>
                        </Link>

                    </div>

                </section>

                {/* ================= QUICK ACCESS ================= */}
                <section className="max-w-6xl mx-auto mb-14">

                    <div className="mb-6">
                        <p className="text-accent font-semibold uppercase tracking-wider text-sm">
                            Your Account
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold">
                            Quick Access
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        {/* Orders */}
                        <Link
                            to="/orders"
                            className="group bg-white rounded-2xl p-6 text-center shadow-md border border-secondary/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                                📦
                            </div>

                            <h3 className="font-semibold">
                                My Orders
                            </h3>

                            <p className="text-xs text-secondary/50 mt-1">
                                View your orders
                            </p>
                        </Link>

                        {/* Settings */}
                        <Link
                            to="/settings"
                            className="group bg-white rounded-2xl p-6 text-center shadow-md border border-secondary/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                                ⚙️
                            </div>

                            <h3 className="font-semibold">
                                Settings
                            </h3>

                            <p className="text-xs text-secondary/50 mt-1">
                                Manage your account
                            </p>
                        </Link>

                        {/* About */}
                        <Link
                            to="/about"
                            className="group bg-white rounded-2xl p-6 text-center shadow-md border border-secondary/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                                ℹ️
                            </div>

                            <h3 className="font-semibold">
                                About Us
                            </h3>

                            <p className="text-xs text-secondary/50 mt-1">
                                Learn about us
                            </p>
                        </Link>

                        {/* Contact */}
                        <Link
                            to="/contact"
                            className="group bg-white rounded-2xl p-6 text-center shadow-md border border-secondary/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                                📞
                            </div>

                            <h3 className="font-semibold">
                                Contact Us
                            </h3>

                            <p className="text-xs text-secondary/50 mt-1">
                                Get in touch
                            </p>
                        </Link>

                    </div>

                </section>

                {/* ================= BOTTOM CTA ================= */}
                <section className="max-w-6xl mx-auto">

                    <div className="relative overflow-hidden bg-secondary rounded-3xl p-8 md:p-12 text-center text-white">

                        {/* Decorative circles */}
                        <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-accent/20"></div>

                        <div className="absolute -bottom-20 -left-16 w-48 h-48 rounded-full bg-accent/10"></div>

                        <div className="relative">

                            <p className="text-accent font-semibold uppercase tracking-[3px] text-sm mb-3">
                                Crystal Beauty Clear
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to explore?
                            </h2>

                            <p className="text-white/70 max-w-xl mx-auto mb-7">
                                Find your favourite beauty products and
                                discover something new for your beauty routine.
                            </p>

                            <Link
                                to="/products"
                                className="inline-block bg-accent px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                            >
                                Shop All Products
                            </Link>

                        </div>

                    </div>

                </section>

            </div>
        </div>
    );
}