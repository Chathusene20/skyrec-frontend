import { useState } from "react";
import toast from "react-hot-toast";

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.subject ||
            !formData.message
        ) {
            toast.error("Please fill in all fields");
            return;
        }

        toast.success("Thank you! Your message has been sent.");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="w-full bg-primary text-secondary overflow-hidden">

            {/* ================================================= */}
            {/* HERO / CONTACT HEADER */}
            {/* ================================================= */}

            <section
                className="
                    relative
                    min-h-[430px]
                    flex
                    items-center
                    justify-center
                    bg-cover
                    bg-center
                "
                style={{
                    backgroundImage: "url('/bg.jpg')",
                }}
            >

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-secondary/80"></div>

                {/* Orange glow */}

                <div
                    className="
                        absolute
                        top-10
                        left-10
                        w-52
                        h-52
                        rounded-full
                        bg-accent/20
                        blur-3xl
                        animate-float
                    "
                ></div>

                <div
                    className="
                        absolute
                        bottom-10
                        right-10
                        w-64
                        h-64
                        rounded-full
                        bg-accent/10
                        blur-3xl
                        animate-pulseGlow
                    "
                ></div>


                {/* Header Content */}

                <div className="relative z-10 text-center px-6 max-w-4xl">

                    <p
                        className="
                            text-accent
                            font-semibold
                            uppercase
                            tracking-[0.3em]
                            mb-5
                            animate-fadeInDown
                        "
                    >
                        Crystal Beauty Clear
                    </p>

                    <h1
                        className="
                            text-5xl
                            md:text-7xl
                            font-bold
                            text-white
                            animate-fadeInUp
                        "
                    >
                        Contact
                        <span className="text-accent">
                            {" "}Us
                        </span>
                    </h1>

                    <p
                        className="
                            mt-6
                            text-lg
                            md:text-xl
                            text-white/80
                            max-w-2xl
                            mx-auto
                            leading-relaxed
                            animate-fadeInUp
                        "
                        style={{ animationDelay: "0.2s" }}
                    >
                        Have a question, suggestion or need help with
                        your order? We'd love to hear from you.
                    </p>

                </div>

            </section>


            {/* ================================================= */}
            {/* CONTACT SECTION */}
            {/* ================================================= */}

            <section className="py-20 px-6">

                <div className="max-w-7xl mx-auto">

                    {/* Section heading */}

                    <div className="text-center mb-14">

                        <p className="text-accent font-semibold uppercase tracking-widest">
                            Get in Touch
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-2">
                            We'd Love to Hear From You
                        </h2>

                        <p className="text-secondary/60 mt-4 max-w-2xl mx-auto">
                            Whether you have a question about our products,
                            your order or anything else, our team is ready
                            to help.
                        </p>

                    </div>


                    {/* Main contact grid */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">


                        {/* ===================================== */}
                        {/* CONTACT INFORMATION */}
                        {/* ===================================== */}

                        <div
                            className="
                                relative
                                bg-secondary
                                rounded-[2rem]
                                p-8
                                md:p-10
                                overflow-hidden
                                shadow-2xl
                                animate-fadeInUp
                            "
                        >

                            {/* Decorative glow */}

                            <div
                                className="
                                    absolute
                                    -top-20
                                    -right-20
                                    w-64
                                    h-64
                                    rounded-full
                                    bg-accent/20
                                    blur-3xl
                                "
                            ></div>


                            <div className="relative z-10">

                                <p className="text-accent font-semibold uppercase tracking-widest">
                                    Contact Information
                                </p>

                                <h3 className="text-3xl md:text-4xl font-bold text-white mt-3">
                                    Let's talk about
                                    <span className="text-accent">
                                        {" "}beauty.
                                    </span>
                                </h3>

                                <p className="text-white/65 mt-5 leading-relaxed">
                                    We're always happy to hear from our
                                    customers. Reach out to us through
                                    any of the channels below.
                                </p>


                                {/* Email */}

                                <div
                                    className="
                                        mt-10
                                        flex
                                        items-start
                                        gap-5
                                        p-5
                                        rounded-2xl
                                        bg-white/5
                                        border
                                        border-white/10
                                        hover:bg-accent/10
                                        hover:border-accent/30
                                        transition-all
                                        duration-300
                                    "
                                >

                                    <div
                                        className="
                                            w-12
                                            h-12
                                            shrink-0
                                            rounded-xl
                                            bg-accent
                                            flex
                                            items-center
                                            justify-center
                                            text-xl
                                        "
                                    >
                                        📧
                                    </div>

                                    <div>

                                        <h4 className="text-white font-semibold">
                                            Email
                                        </h4>

                                        <p className="text-white/60 mt-1 break-all">
                                            chathuminisenethya246@gmail.com
                                        </p>

                                    </div>

                                </div>


                                {/* Phone */}

                                <div
                                    className="
                                        mt-4
                                        flex
                                        items-start
                                        gap-5
                                        p-5
                                        rounded-2xl
                                        bg-white/5
                                        border
                                        border-white/10
                                        hover:bg-accent/10
                                        hover:border-accent/30
                                        transition-all
                                        duration-300
                                    "
                                >

                                    <div
                                        className="
                                            w-12
                                            h-12
                                            shrink-0
                                            rounded-xl
                                            bg-accent
                                            flex
                                            items-center
                                            justify-center
                                            text-xl
                                        "
                                    >
                                        📱
                                    </div>

                                    <div>

                                        <h4 className="text-white font-semibold">
                                            Phone
                                        </h4>

                                        <p className="text-white/60 mt-1">
                                            +94 74 024 9751
                                        </p>

                                    </div>

                                </div>


                                {/* Location */}

                                <div
                                    className="
                                        mt-4
                                        flex
                                        items-start
                                        gap-5
                                        p-5
                                        rounded-2xl
                                        bg-white/5
                                        border
                                        border-white/10
                                        hover:bg-accent/10
                                        hover:border-accent/30
                                        transition-all
                                        duration-300
                                    "
                                >

                                    <div
                                        className="
                                            w-12
                                            h-12
                                            shrink-0
                                            rounded-xl
                                            bg-accent
                                            flex
                                            items-center
                                            justify-center
                                            text-xl
                                        "
                                    >
                                        📍
                                    </div>

                                    <div>

                                        <h4 className="text-white font-semibold">
                                            Location
                                        </h4>

                                        <p className="text-white/60 mt-1">
                                            Sri Lanka
                                        </p>

                                    </div>

                                </div>


                                {/* Small quote */}

                                <div className="mt-10 pt-8 border-t border-white/10">

                                    <p className="text-white/80 italic text-lg leading-relaxed">
                                        "Making quality beauty
                                        <span className="text-accent">
                                            {" "}accessible
                                        </span>
                                        {" "}to you."
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* ===================================== */}
                        {/* CONTACT FORM */}
                        {/* ===================================== */}

                        <div
                            className="
                                bg-white/70
                                backdrop-blur-xl
                                rounded-[2rem]
                                p-8
                                md:p-10
                                border
                                border-secondary/10
                                shadow-xl
                                animate-fadeInUp
                            "
                            style={{ animationDelay: "0.2s" }}
                        >

                            <p className="text-accent font-semibold uppercase tracking-widest">
                                Send a Message
                            </p>

                            <h3 className="text-3xl md:text-4xl font-bold text-secondary mt-3">
                                How can we help?
                            </h3>

                            <p className="text-secondary/60 mt-4">
                                Fill out the form below and we'll get
                                back to you as soon as possible.
                            </p>


                            <form
                                onSubmit={handleSubmit}
                                className="mt-8 space-y-5"
                            >

                                {/* Name */}

                                <div>

                                    <label className="block text-sm font-semibold text-secondary mb-2">
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="
                                            w-full
                                            px-5
                                            py-4
                                            rounded-xl
                                            bg-primary
                                            border
                                            border-secondary/10
                                            text-secondary
                                            placeholder:text-secondary/40
                                            outline-none
                                            focus:border-accent
                                            focus:ring-4
                                            focus:ring-accent/10
                                            transition-all
                                            duration-300
                                        "
                                    />

                                </div>


                                {/* Email */}

                                <div>

                                    <label className="block text-sm font-semibold text-secondary mb-2">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="
                                            w-full
                                            px-5
                                            py-4
                                            rounded-xl
                                            bg-primary
                                            border
                                            border-secondary/10
                                            text-secondary
                                            placeholder:text-secondary/40
                                            outline-none
                                            focus:border-accent
                                            focus:ring-4
                                            focus:ring-accent/10
                                            transition-all
                                            duration-300
                                        "
                                    />

                                </div>


                                {/* Subject */}

                                <div>

                                    <label className="block text-sm font-semibold text-secondary mb-2">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What is this about?"
                                        className="
                                            w-full
                                            px-5
                                            py-4
                                            rounded-xl
                                            bg-primary
                                            border
                                            border-secondary/10
                                            text-secondary
                                            placeholder:text-secondary/40
                                            outline-none
                                            focus:border-accent
                                            focus:ring-4
                                            focus:ring-accent/10
                                            transition-all
                                            duration-300
                                        "
                                    />

                                </div>


                                {/* Message */}

                                <div>

                                    <label className="block text-sm font-semibold text-secondary mb-2">
                                        Message
                                    </label>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message..."
                                        rows="5"
                                        className="
                                            w-full
                                            px-5
                                            py-4
                                            rounded-xl
                                            bg-primary
                                            border
                                            border-secondary/10
                                            text-secondary
                                            placeholder:text-secondary/40
                                            outline-none
                                            resize-none
                                            focus:border-accent
                                            focus:ring-4
                                            focus:ring-accent/10
                                            transition-all
                                            duration-300
                                        "
                                    ></textarea>

                                </div>


                                {/* Submit */}

                                <button
                                    type="submit"
                                    className="
                                        w-full
                                        py-4
                                        rounded-xl
                                        bg-accent
                                        text-white
                                        font-semibold
                                        text-lg
                                        shadow-lg
                                        shadow-accent/20
                                        hover:scale-[1.02]
                                        hover:shadow-accent/40
                                        transition-all
                                        duration-300
                                    "
                                >
                                    Send Message →
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================================================= */}
            {/* BOTTOM MESSAGE */}
            {/* ================================================= */}

            <section className="px-6 pb-24">

                <div
                    className="
                        max-w-5xl
                        mx-auto
                        text-center
                        rounded-[2rem]
                        bg-secondary
                        px-8
                        py-14
                        shadow-xl
                        relative
                        overflow-hidden
                    "
                >

                    <div className="absolute inset-0 bg-accent/5"></div>

                    <div className="relative z-10">

                        <div className="text-5xl mb-5 animate-float">
                            💕
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            We're here for you.
                        </h2>

                        <p className="text-white/65 max-w-xl mx-auto mt-4">
                            Your questions, feedback and ideas help us
                            create a better beauty experience for everyone.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    );
}