import { Link } from "react-router-dom";

export default function AboutPage() {

  return (

    <div className="min-h-screen bg-primary text-secondary">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className="
          relative
          min-h-[75vh]
          flex
          items-center
          bg-[url('/bg.jpg')]
          bg-cover
          bg-center
        "
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-secondary/75"></div>

        {/* Decorative Orange Glow */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/20 blur-3xl rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">

          <div className="max-w-3xl">

            {/* Logo */}
            <img
              src="/skyrec logo.png"
              alt="Crystal Beauty Clear Logo"
              className="w-48 mb-8"
            />

            <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              About Crystal Beauty Clear
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">

              Beauty That
              <span className="text-accent"> Belongs </span>
              to You

            </h1>

            <p className="mt-7 text-lg md:text-xl text-white/80 leading-8 max-w-2xl">

              Discover quality skincare, makeup, haircare, fragrances,
              and beauty essentials carefully selected to make beauty
              more accessible and enjoyable for everyone.

            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <Link
                to="/products"
                className="
                  px-7
                  py-3
                  rounded-xl
                  bg-accent
                  text-white
                  font-semibold
                  text-lg
                  shadow-lg
                  shadow-accent/20
                  hover:scale-105
                  hover:shadow-accent/30
                  transition
                  duration-300
                "
              >
                Explore Products
              </Link>

              <Link
                to="/"
                className="
                  px-7
                  py-3
                  rounded-xl
                  border
                  border-white/30
                  bg-white/10
                  backdrop-blur-md
                  text-white
                  font-semibold
                  text-lg
                  hover:bg-white/20
                  transition
                  duration-300
                "
              >
                Back to Home
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="py-24 px-6 bg-primary">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left Text */}

            <div>

              <p className="text-accent uppercase tracking-[0.25em] text-sm font-semibold mb-4">
                Who We Are
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary">

                Your Beauty,
                <span className="text-accent"> Your Choice.</span>

              </h2>

              <p className="mt-6 text-secondary/70 text-lg leading-8">

                Welcome to Crystal Beauty Clear, your online destination
                for quality beauty and personal care products.

              </p>

              <p className="mt-5 text-secondary/70 text-lg leading-8">

                We created Crystal Beauty Clear with a simple goal —
                to make quality beauty products easier to discover and
                purchase online while keeping them available at
                affordable and considerable prices.

              </p>

              <p className="mt-5 text-secondary/70 text-lg leading-8">

                From everyday skincare essentials to makeup, haircare,
                fragrances, and beauty tools, we bring a variety of
                beauty products together in one convenient place.

              </p>

            </div>


            {/* Right Glass Card */}

            <div className="relative">

              <div className="absolute -inset-4 bg-accent/15 blur-3xl rounded-full"></div>

              <div
                className="
                  relative
                  rounded-3xl
                  border
                  border-secondary/10
                  bg-gray-300
                  backdrop-blur-xl
                  shadow-[0_20px_50px_rgba(6,32,43,0.10)]
                  p-10
                "
              >

                <div className="flex justify-center mb-8">

                  <img
                    src="/skyrec logo.png"
                    alt="Crystal Beauty Clear"
                    className="w-52"
                  />

                </div>

                <div className="h-px bg-secondary/10 mb-8"></div>

                <p className="text-center text-2xl md:text-3xl font-semibold leading-relaxed text-secondary">

                  "Making quality beauty
                  <span className="text-accent"> accessible </span>
                  to you."

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION SECTION
      ====================================================== */}

      <section className="py-24 px-6 bg-secondary">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Our Mission
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">

            Beauty Made
            <span className="text-accent"> Accessible</span>

          </h2>

          <p className="mt-8 text-xl md:text-2xl text-white/80 leading-9 max-w-4xl mx-auto">

            "We make the best of beauty accessible to every eye,
            lip and face."

          </p>

          <p className="mt-6 text-white/60 text-lg leading-8 max-w-3xl mx-auto">

            Our mission is to make it easier for customers to discover
            quality beauty products online without compromising on
            convenience, value, or choice.

          </p>

        </div>

      </section>


      {/* =====================================================
          WHAT WE OFFER
      ====================================================== */}

      <section className="py-24 px-6 bg-primary">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              What We Offer
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary">

              Everything You Need
              <span className="text-accent"> for Your Beauty</span>

            </h2>

            <p className="mt-5 text-secondary/60 text-lg max-w-2xl mx-auto">

              Explore our collection of carefully selected beauty
              products designed to fit different beauty needs.

            </p>

          </div>


          {/* Product Categories */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">


            {/* Skincare */}

            <div
              className="
                group
                rounded-3xl
                border
                border-secondary/10
                bg-white/60
                backdrop-blur-xl
                p-7
                text-center
                shadow-sm
                hover:shadow-xl
                hover:shadow-secondary/10
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div className="
                w-16
                h-16
                mx-auto
                rounded-2xl
                bg-accent/10
                flex
                items-center
                justify-center
                mb-5
                group-hover:bg-accent/20
                transition
              ">

                <span className="text-3xl">
                  ✨
                </span>

              </div>

              <h3 className="text-xl font-semibold text-secondary">
                Skincare
              </h3>

              <p className="mt-3 text-secondary/60 text-sm leading-6">
                Essentials for your everyday skincare routine.
              </p>

            </div>


            {/* Makeup */}

            <div
              className="
                group
                rounded-3xl
                border
                border-secondary/10
                bg-white/60
                backdrop-blur-xl
                p-7
                text-center
                shadow-sm
                hover:shadow-xl
                hover:shadow-secondary/10
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div className="
                w-16
                h-16
                mx-auto
                rounded-2xl
                bg-accent/10
                flex
                items-center
                justify-center
                mb-5
                group-hover:bg-accent/20
                transition
              ">

                <span className="text-3xl">
                  💄
                </span>

              </div>

              <h3 className="text-xl font-semibold text-secondary">
                Makeup
              </h3>

              <p className="mt-3 text-secondary/60 text-sm leading-6">
                Beauty products to express your individual style.
              </p>

            </div>


            {/* Haircare */}

            <div
              className="
                group
                rounded-3xl
                border
                border-secondary/10
                bg-white/60
                backdrop-blur-xl
                p-7
                text-center
                shadow-sm
                hover:shadow-xl
                hover:shadow-secondary/10
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div className="
                w-16
                h-16
                mx-auto
                rounded-2xl
                bg-accent/10
                flex
                items-center
                justify-center
                mb-5
                group-hover:bg-accent/20
                transition
              ">

                <span className="text-3xl">
                  🌸
                </span>

              </div>

              <h3 className="text-xl font-semibold text-secondary">
                Haircare
              </h3>

              <p className="mt-3 text-secondary/60 text-sm leading-6">
                Products to support your everyday haircare routine.
              </p>

            </div>


            {/* Fragrances */}

            <div
              className="
                group
                rounded-3xl
                border
                border-secondary/10
                bg-white/60
                backdrop-blur-xl
                p-7
                text-center
                shadow-sm
                hover:shadow-xl
                hover:shadow-secondary/10
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div className="
                w-16
                h-16
                mx-auto
                rounded-2xl
                bg-accent/10
                flex
                items-center
                justify-center
                mb-5
                group-hover:bg-accent/20
                transition
              ">

                <span className="text-3xl">
                  🌹
                </span>

              </div>

              <h3 className="text-xl font-semibold text-secondary">
                Fragrances
              </h3>

              <p className="mt-3 text-secondary/60 text-sm leading-6">
                Beautiful fragrances for different occasions.
              </p>

            </div>


            {/* Beauty Tools */}

            <div
              className="
                group
                rounded-3xl
                border
                border-secondary/10
                bg-white/60
                backdrop-blur-xl
                p-7
                text-center
                shadow-sm
                hover:shadow-xl
                hover:shadow-secondary/10
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div className="
                w-16
                h-16
                mx-auto
                rounded-2xl
                bg-accent/10
                flex
                items-center
                justify-center
                mb-5
                group-hover:bg-accent/20
                transition
              ">

                <span className="text-3xl">
                  🪞
                </span>

              </div>

              <h3 className="text-xl font-semibold text-secondary">
                Beauty Tools
              </h3>

              <p className="mt-3 text-secondary/60 text-sm leading-6">
                Useful tools and accessories for your beauty routine.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="py-24 px-6 bg-secondary/5">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary">

              Beauty With
              <span className="text-accent"> Confidence</span>

            </h2>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


            {/* Quality */}

            <div
              className="
                rounded-3xl
                border
                border-secondary/10
                bg-white
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div className="text-accent text-3xl mb-5">
                ✦
              </div>

              <h3 className="text-xl font-semibold mb-3 text-secondary">
                Quality Products
              </h3>

              <p className="text-secondary/60 leading-7">
                We focus on providing quality beauty products
                selected with customer needs in mind.
              </p>

            </div>


            {/* Affordable */}

            <div
              className="
                rounded-3xl
                border
                border-secondary/10
                bg-white
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div className="text-accent text-3xl mb-5">
                ♢
              </div>

              <h3 className="text-xl font-semibold mb-3 text-secondary">
                Affordable Prices
              </h3>

              <p className="text-secondary/60 leading-7">
                We believe quality beauty products should be
                accessible without unnecessary expense.
              </p>

            </div>


            {/* Trusted */}

            <div
              className="
                rounded-3xl
                border
                border-secondary/10
                bg-white
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div className="text-accent text-3xl mb-5">
                ✓
              </div>

              <h3 className="text-xl font-semibold mb-3 text-secondary">
                Trusted Selection
              </h3>

              <p className="text-secondary/60 leading-7">
                Our collection is designed to give customers
                convenient access to beauty essentials.
              </p>

            </div>


            {/* Convenience */}

            <div
              className="
                rounded-3xl
                border
                border-secondary/10
                bg-white
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div className="text-accent text-3xl mb-5">
                ◇
              </div>

              <h3 className="text-xl font-semibold mb-3 text-secondary">
                Easy Shopping
              </h3>

              <p className="text-secondary/60 leading-7">
                Discover and shop for your favourite beauty
                essentials through a convenient online experience.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CUSTOMER COMMITMENT
      ====================================================== */}

      <section className="py-24 px-6 bg-primary">

        <div className="max-w-5xl mx-auto">

          <div
            className="
              rounded-3xl
              border
              border-secondary/10
              bg-white/70
              backdrop-blur-xl
              shadow-[0_20px_50px_rgba(6,32,43,0.08)]
              p-10
              md:p-16
              text-center
            "
          >

            <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Our Commitment
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary">

              Your Beauty Journey
              <span className="text-accent"> Matters</span>

            </h2>

            <p className="mt-7 text-secondary/70 text-lg leading-8 max-w-3xl mx-auto">

              At Crystal Beauty Clear, we aim to create a shopping
              experience where customers can discover quality beauty
              products with confidence, convenience, and value.

            </p>

            <p className="mt-5 text-secondary/70 text-lg leading-8 max-w-3xl mx-auto">

              Whether you're looking for everyday skincare, makeup,
              haircare, fragrances, or beauty tools, we're here to
              help you find products that fit your beauty needs.

            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CALL TO ACTION
      ====================================================== */}

      <section
        className="
          relative
          py-28
          px-6
          bg-[url('/bg.jpg')]
          bg-cover
          bg-center
        "
      >

        <div className="absolute inset-0 bg-secondary/80"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <img
            src="/skyrec logo.png"
            alt="Crystal Beauty Clear Logo"
            className="w-44 mx-auto mb-8"
          />

          <h2 className="text-4xl md:text-5xl font-bold text-white">

            Ready to Discover
            <span className="text-accent"> Your Beauty?</span>

          </h2>

          <p className="mt-6 text-lg text-white/70 leading-8">

            Explore our collection and find beauty essentials
            that are made for you.

          </p>

          <Link
            to="/products"
            className="
              inline-block
              mt-8
              px-9
              py-4
              rounded-xl
              bg-accent
              text-white
              font-semibold
              text-lg
              shadow-lg
              shadow-accent/20
              hover:scale-105
              hover:shadow-accent/30
              transition
              duration-300
            "
          >
            Shop Now
          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-white/10 bg-secondary">

        <div className="max-w-6xl mx-auto px-6 py-12">

          <div className="grid md:grid-cols-3 gap-10">

            {/* Brand */}

            <div>

              <img
                src="/skyrec logo.png"
                alt="Crystal Beauty Clear"
                className="w-40 mb-5"
              />

              <p className="text-white/60 leading-7 max-w-sm">

                Quality beauty products made accessible through
                a convenient online shopping experience.

              </p>

            </div>


            {/* Quick Links */}

            <div>

              <h3 className="text-lg font-semibold mb-5 text-white">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3">

                <Link
                  to="/"
                  className="text-white/60 hover:text-accent transition"
                >
                  Home
                </Link>

                <Link
                  to="/products"
                  className="text-white/60 hover:text-accent transition"
                >
                  Shop
                </Link>

                <Link
                  to="/about"
                  className="text-white/60 hover:text-accent transition"
                >
                  About Us
                </Link>

              </div>

            </div>


            {/* Contact */}

            <div>

              <h3 className="text-lg font-semibold mb-5 text-white">
                Contact Us
              </h3>

              <div className="space-y-3 text-white/60">

                <p>
                  📧 Email: your-email@example.com
                </p>

                <p>
                  📞 Phone: +94 XX XXX XXXX
                </p>

                <p>
                  📱 Follow us on social media
                </p>

              </div>

            </div>

          </div>


          <div className="border-t border-white/10 mt-10 pt-6 text-center">

            <p className="text-sm text-white/50">
              © 2026 Crystal Beauty Clear. All Rights Reserved.
            </p>

          </div>

        </div>

      </footer>

    </div>

  );

}