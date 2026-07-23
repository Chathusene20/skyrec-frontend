import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  // ==========================
  // Google Login
  // ==========================

  const googleLogin = useGoogleLogin({

    onSuccess: async (response) => {

      try {

        const res = await axios.post(
          import.meta.env.VITE_API_URL + "/api/users/google-login",
          {
            token: response.access_token
          }
        );


        console.log("GOOGLE LOGIN RESPONSE:", res.data);


        localStorage.setItem(
          "token",
          res.data.token
        );


        localStorage.setItem(
          "user",
          JSON.stringify(res.data.user)
        );


        const user = res.data.user;


        toast.success("Google login successful!");


        if(user.role === "admin"){
          navigate("/admin");
        }
        else{
          navigate("/");
        }


      } catch(error) {

        console.error(
          "Google login failed:",
          error
        );

        toast.error(
          "Google login failed. Please try again"
        );

      }

    }

  });



  // ==========================
  // Normal Login
  // ==========================

  async function login() {

    try {

      const response = await axios.post(

        import.meta.env.VITE_API_URL + "/api/users/login",

        {
          email: email,
          password: password,
        }

      );


      console.log(
        "LOGIN RESPONSE:",
        response.data
      );


      // Save JWT Token
      localStorage.setItem(
        "token",
        response.data.token
      );


      // Save User Details
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );


      toast.success(
        "Login successful!"
      );


      const user = response.data.user;


      if(user.role === "admin"){

        navigate("/admin");

      }
      else{

        navigate("/");

      }


    } catch(error) {


      console.error(
        "Login failed:",
        error
      );


      toast.error(
        "Login failed. Please check your credentials."
      );

    }

  }



  return (

    <div className="w-full h-screen flex bg-[url('/bg.jpg')] bg-cover bg-center relative">


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>



      {/* Left Side */}

      <div className="relative z-10 w-1/2 hidden lg:flex flex-col justify-center px-24 text-white">


        <img
          src="/skyrec logo.png"
          alt="Crystal Beauty Clear Logo"
          className="w-56 mb-8"
        />


        <h1 className="text-6xl font-bold leading-tight">

          Crystal
          <span className="text-accent">
            Beauty
          </span>

          <br />

          Clear

        </h1>


        <p className="mt-8 text-lg text-white/80 leading-8 max-w-lg">

          Discover premium skincare, makeup, and beauty essentials carefully
          selected to help you look and feel your best.

        </p>


      </div>





      {/* Login Card */}

      <div className="relative z-10 w-full lg:w-1/2 flex justify-center items-center">


        <div className="w-[450px] rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-xl p-12">


          <div className="flex justify-center mb-6">

            <img
              src="/skyrec logo.png"
              alt="Logo"
              className="w-40"
            />

          </div>



          <h2 className="text-3xl font-bold text-center text-white">

            Welcome Back!

          </h2>


          <p className="text-center text-white/70 mt-2 mb-10">

            Sign in to explore your favorite beauty products.

          </p>




          {/* Email */}

          <div className="mb-6">

            <label className="text-white text-sm mb-2 block">

              Email Address

            </label>


            <input

              type="email"

              placeholder="Enter your email"

              onChange={(e)=>setEmail(e.target.value)}

              className="w-full h-12 rounded-xl bg-white/90 px-5 outline-none"

            />

          </div>





          {/* Password */}

          <div className="mb-6">

            <label className="text-white text-sm mb-2 block">

              Password

            </label>


            <input

              type="password"

              placeholder="Enter your password"

              onChange={(e)=>setPassword(e.target.value)}

              className="w-full h-12 rounded-xl bg-white/90 px-5 outline-none"

            />

          </div>





          <div className="flex justify-end mb-6">

            <Link
              to="/forget-password"
              className="text-sm text-white/70 hover:text-accent"
            >

              Forgot Password?

            </Link>


          </div>





          <button

            onClick={login}

            className="w-full h-12 rounded-xl bg-accent text-white font-semibold text-lg"

          >

            Sign In

          </button>





          <button

            onClick={googleLogin}

            className="w-full h-12 mt-3 rounded-xl bg-accent text-white font-semibold text-lg"

          >

            Google Login

          </button>





          <p className="mt-6 text-center text-sm text-white/70">


            Don't have an account?


            <Link

              to="/register"

              className="text-accent font-semibold ml-1"

            >

              Create an Account

            </Link>


          </p>




          <div className="mt-8 text-center text-sm text-white/60">

            © 2026 Crystal Beauty Clear. All Rights Reserved.

          </div>



        </div>


      </div>



    </div>

  );

}