import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;

        if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            toast.error("Please fill in all fields.");
            return;
        }

        // Opens the user's email application
        const mailtoLink =
            `mailto:chathuminisenethya246@gmail.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;

        window.location.href = mailtoLink;

        toast.success("Opening your email application...");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="min-h-screen bg-primary text-secondary">

            {/* =========================
                HERO
            ========================= */}
            <section className="relative overflow-hidden">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/bg.jpg')" }}
                />

                <div className="absolute inset-0 bg-secondary/90" />

                {/* Decorative circles */}
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
                <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

                <div className="relative z-10 mx-auto flex min-h-[380px] max-w-7xl items-center justify-center px-6 py-20 text-center">

                    <div className="max-w-3xl">

                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                            Crystal Beauty Clear
                        </p>

                        <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
                            Let's
                            <span className="text-accent"> Connect</span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                            Have a question about our products, your order, or
                            anything else? We're always happy to hear from you.
                        </p>

                    </div>
                </div>
            </section>


            {/* =========================
                CONTACT CONTENT
            ========================= */}
            <section className="px-6 py-16 md:py-24">

                <div className="mx-auto max-w-6xl">

                    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

                        {/* =========================
                            CONTACT INFORMATION
                        ========================= */}
                        <div className="relative overflow-hidden rounded-3xl bg-secondary p-8 shadow-2xl md:p-10">

                            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

                            <div className="relative z-10">

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                                    Contact Information
                                </p>

                                <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
                                    We're here to
                                    <span className="text-accent"> help.</span>
                                </h2>

                                <p className="mt-5 leading-7 text-white/60">
                                    Whether you need help with an order, want to
                                    ask a question, or simply want to share your
                                    feedback, feel free to reach out.
                                </p>


                                {/* Email */}
                                <a
                                    href="mailto:chathuminisenethya246@gmail.com"
                                    className="group mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-accent/40 hover:bg-accent/10"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <rect
                                                width="20"
                                                height="16"
                                                x="2"
                                                y="4"
                                                rx="2"
                                            />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-sm text-white/50">
                                            Email
                                        </p>

                                        <p className="mt-1 break-all font-medium text-white group-hover:text-accent">
                                            chathuminisenethya246@gmail.com
                                        </p>
                                    </div>
                                </a>


                                {/* Phone */}
                                <a
                                    href="tel:+94740249751"
                                    className="group mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-accent/40 hover:bg-accent/10"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <p className="text-sm text-white/50">
                                            Phone
                                        </p>

                                        <p className="mt-1 font-medium text-white group-hover:text-accent">
                                            +94 74 024 9751
                                        </p>
                                    </div>
                                </a>


                                {/* Location */}
                                <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>

                                    <div>
                                        <p className="text-sm text-white/50">
                                            Location
                                        </p>

                                        <p className="mt-1 font-medium text-white">
                                            Sri Lanka
                                        </p>
                                    </div>

                                </div>


                                {/* Divider */}
                                <div className="my-8 h-px bg-white/10" />

                                <p className="text-lg italic leading-7 text-white/70">
                                    "Beauty made simple,
                                    <span className="text-accent">
                                        {" "}accessible
                                    </span>
                                    {" "}and trusted."
                                </p>

                            </div>
                        </div>


                        {/* =========================
                            CONTACT FORM
                        ========================= */}
                        <div className="rounded-3xl border border-secondary/10 bg-white p-8 shadow-xl md:p-10">

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                                    Send a Message
                                </p>

                                <h2 className="mt-3 text-3xl font-bold text-secondary md:text-4xl">
                                    How can we help?
                                </h2>

                                <p className="mt-3 leading-7 text-secondary/60">
                                    Fill out the form and we'll help you with
                                    your questions or concerns.
                                </p>

                            </div>


                            <form
                                onSubmit={handleSubmit}
                                className="mt-8 space-y-5"
                            >

                                {/* Name + Email */}
                                <div className="grid gap-5 md:grid-cols-2">

                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-semibold text-secondary"
                                        >
                                            Your Name
                                        </label>

                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className="w-full rounded-xl border border-secondary/10 bg-primary px-4 py-3.5 text-secondary outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
                                        />
                                    </div>


                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-semibold text-secondary"
                                        >
                                            Email Address
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="w-full rounded-xl border border-secondary/10 bg-primary px-4 py-3.5 text-secondary outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
                                        />
                                    </div>

                                </div>


                                {/* Subject */}
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="mb-2 block text-sm font-semibold text-secondary"
                                    >
                                        Subject
                                    </label>

                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What can we help you with?"
                                        className="w-full rounded-xl border border-secondary/10 bg-primary px-4 py-3.5 text-secondary outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
                                    />
                                </div>


                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-semibold text-secondary"
                                    >
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        rows={6}
                                        className="w-full resize-none rounded-xl border border-secondary/10 bg-primary px-4 py-3.5 text-secondary outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
                                    />
                                </div>


                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-semibold text-white shadow-lg shadow-accent/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
                                >
                                    Send Message

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="m5 12 14-7-7 14-2-6-5-1Z" />
                                    </svg>
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </section>


            {/* =========================
                BOTTOM CTA
            ========================= */}
            <section className="px-6 pb-20">

                <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-secondary px-8 py-12 text-center shadow-xl md:py-16">

                    <div className="mx-auto max-w-2xl">

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                            Crystal Beauty Clear
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                            Your beauty journey matters to us.
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl leading-7 text-white/60">
                            Thank you for choosing Crystal Beauty Clear.
                            We're always here to listen, help and make your
                            experience better.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    );
}