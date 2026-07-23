import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegistrationPage() {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function register() {

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {

      await axios.post(
        import.meta.env.VITE_API_URL + "/api/users",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      toast.success("Registration Successful!");
      navigate("/login");

    } catch (err) {

      console.error(err);

      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Registration Failed");
      }

    }

  }

  return (

    <div className="relative min-h-screen overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Decorative Blur Circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex min-h-screen">

        {/* Left Section */}

        <div className="hidden lg:flex w-1/2 flex-col justify-center px-24 text-white">

          <img
            src="/skyrec logo.png"
            alt="Crystal Beauty Clear"
            className="w-60 mb-8"
          />

          <h1 className="text-6xl font-bold leading-tight">
            Join
            <span className="text-accent"> Crystal</span>
            <br />
            Beauty Clear
          </h1>

          <p className="mt-8 text-lg leading-8 text-white/80 max-w-xl">
            Create your free account and unlock a world of premium skincare,
            beauty products, exclusive offers, faster checkout, wishlists,
            order tracking, and personalized recommendations.
          </p>

        </div>

        {/* Right Section */}

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">

          <div
            className="w-full max-w-xl rounded-3xl
            border border-white/20
            bg-white/10
            backdrop-blur-2xl
            shadow-[0_25px_70px_rgba(0,0,0,0.45)]
            p-10"
          >

            {/* Avatar */}

            <div className="flex justify-center">

              <FaUserCircle
                className="text-white text-7xl drop-shadow-lg"
              />

            </div>

            <h2 className="text-4xl font-bold text-center text-white mt-4">
              Create Account
            </h2>

            <p className="text-center text-white/70 mt-3 mb-8">
              Welcome to Crystal Beauty Clear.
              Start your beauty journey today.
            </p>

            {/* Form Starts Here */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* First Name */}

              <div>

                <label className="text-white text-sm block mb-2">
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="John"
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                  className="w-full h-12 rounded-xl
                  bg-white/90
                  px-4
                  outline-none
                  transition
                  focus:ring-2
                  focus:ring-accent"
                />

              </div>

              {/* Last Name */}

              <div>

                <label className="text-white text-sm block mb-2">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                  className="w-full h-12 rounded-xl
                  bg-white/90
                  px-4
                  outline-none
                  transition
                  focus:ring-2
                  focus:ring-accent"
                />

              </div>
                            {/* Email */}

              <div className="md:col-span-2">

                <label className="text-white text-sm block mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="
                  w-full h-12 
                  rounded-xl
                  bg-white/90
                  px-4
                  outline-none
                  transition
                  focus:ring-2
                  focus:ring-accent
                  "
                />

              </div>


              {/* Password */}

              <div>

                <label className="text-white text-sm block mb-2">
                  Password
                </label>


                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="
                    w-full h-12
                    rounded-xl
                    bg-white/90
                    px-4
                    pr-12
                    outline-none
                    transition
                    focus:ring-2
                    focus:ring-accent
                    "
                  />


                  <button
                    type="button"
                    onClick={()=>setShowPassword(!showPassword)}
                    className="
                    absolute
                    right-4
                    top-3
                    text-gray-600
                    hover:text-accent
                    transition
                    "
                  >

                    {
                      showPassword 
                      ?
                      <FaEyeSlash size={20}/>
                      :
                      <FaEye size={20}/>
                    }

                  </button>


                </div>


              </div>



              {/* Confirm Password */}

              <div>

                <label className="text-white text-sm block mb-2">
                  Confirm Password
                </label>


                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  className="
                  w-full h-12
                  rounded-xl
                  bg-white/90
                  px-4
                  outline-none
                  transition
                  focus:ring-2
                  focus:ring-accent
                  "
                />


              </div>


            </div>



            {/* Terms */}

            <div className="
            flex 
            items-center 
            gap-3 
            mt-6
            text-white/70
            text-sm
            ">

              <input
                type="checkbox"
                className="
                w-4
                h-4
                accent-orange-500
                "
              />


              <p>
                I agree to the 
                <span className="text-accent font-semibold ml-1">
                  Terms & Conditions
                </span>
              </p>


            </div>



            {/* Register Button */}

            <button
              onClick={register}
              className="
              mt-8
              w-full
              h-13
              rounded-xl
              bg-gradient-to-r
              from-orange-500
              to-orange-600
              text-white
              font-semibold
              text-lg
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-xl
              hover:shadow-orange-500/40
              active:scale-95
              "
            >

              Create Account

            </button>



            {/* Login Link */}

            <p className="
            text-center
            mt-8
            text-white/70
            text-sm
            ">

              Already have an account?

              <Link
                to="/login"
                className="
                ml-2
                text-accent
                font-semibold
                hover:underline
                "
              >

                Sign In

              </Link>


            </p>
                        {/* Footer */}

            <div
              className="
              mt-8
              text-center
              text-sm
              text-white/50
              "
            >

              © 2026 Crystal Beauty Clear. All Rights Reserved.

            </div>


          </div>


        </div>


      </div>


    </div>

  );

}