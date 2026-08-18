import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserData() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token) {

            axios
                .get(import.meta.env.VITE_API_URL + "/api/users/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })

                .then((res) => {
                    setUser(res.data);
                    setLoading(false);
                })
                     
    .catch((error) => {

    console.log("GET USER ERROR:", error.response?.data || error.message);

    // Do NOT remove token here while debugging
    setUser(null);
    setLoading(false);

});
               
 } else {

            setLoading(false);

        }

    }, []);



    // Logout Function
    function logout() {

        localStorage.removeItem("token");

        setUser(null);

        setIsLogoutConfirmOpen(false);

        navigate("/login");

    }



    return (

        <div className="flex items-center justify-center">


            {/* Logout Confirmation Modal */}

            {
                isLogoutConfirmOpen && (

                    <div
                        className="
                            fixed
                            z-[120]
                            inset-0
                            bg-black/40
                            backdrop-blur-sm
                            flex
                            justify-center
                            items-center
                        "
                    >

                        <div
                            className="
                                w-[320px]
                                bg-primary
                                rounded-2xl
                                p-6
                                shadow-2xl
                                flex
                                flex-col
                                items-center
                                gap-5
                            "
                        >

                            <h2 className="
                                text-lg
                                font-bold
                                text-secondary
                            ">
                                Logout Confirmation
                            </h2>


                            <p className="
                                text-center
                                text-gray-700
                            ">
                                Are you sure you want to logout?
                            </p>



                            <div className="flex gap-4">


                                {/* YES BUTTON */}

                                <button

                                    onClick={logout}

                                    className="
                                        px-6
                                        py-2
                                        rounded-full
                                        bg-accent
                                        text-white
                                        font-semibold
                                        hover:scale-105
                                        transition
                                        shadow-md
                                    "

                                >
                                    Yes
                                </button>




                                {/* CANCEL BUTTON */}

                                <button

                                    onClick={() => setIsLogoutConfirmOpen(false)}

                                    className="
                                        px-6
                                        py-2
                                        rounded-full
                                        border
                                        border-secondary
                                        text-secondary
                                        font-semibold
                                        hover:bg-secondary
                                        hover:text-white
                                        transition
                                    "

                                >
                                    Cancel
                                </button>


                            </div>


                        </div>


                    </div>

                )
            }





            {/* Loading Spinner */}

            {
                loading && (

                    <div
                        className="
                            w-9
                            h-9
                            border-[4px]
                            border-accent
                            border-t-transparent
                            rounded-full
                            animate-spin
                        "
                    >

                    </div>

                )
            }






            {/* Logged User */}

            {
                !loading && user && (

                    <div
                        className="
                            w-[260px]
                            flex
                            items-center
                            gap-4
                            bg-primary/90
                            backdrop-blur-md
                            border
                            border-white/50
                            shadow-2xl
                            rounded-full
                            px-5
                            py-2
                            hover:scale-[1.02]
                            transition-all
                            duration-300
                        "
                    >


                        <img

                            src={user.image}

                            alt="Profile"

                            className="
                                w-12
                                h-12
                                rounded-full
                                object-cover
                                border-[3px]
                                border-accent
                                shadow-md
                            "

                        />



                        <div className="leading-tight">

                            <h3
                                className="
                                    font-bold
                                    text-secondary
                                    text-[15px]
                                "
                            >

                                {user.firstName}

                            </h3>



                            <p
                                className="
                                    text-xs
                                    text-gray-600
                                "
                            >

                                Welcome Back 👋

                            </p>


                        </div>





                        <select

                            onChange={(e)=>{

                                if(e.target.value === "logout"){

                                    setIsLogoutConfirmOpen(true);

                                }
                                
                                
                                if (e.target.value === "settings") {
                                window.location.href = "/settings";
                                }
                                
                                if(e.target.value === "orders"){
                                    navigate("/orders");
                                }

                            }}


                            className="
                                w-[100px]
                                bg-orange-200
                                text-secondary
                                border
                                border-gray-600
                                rounded-xl
                                px-3
                                py-2
                                text-sm
                                cursor-pointer
                                shadow-sm
                                outline-none
                                hover:border-accent
                                focus:ring-2
                                focus:ring-accent
                                transition-all
                            "

                        >

                            <option value="">
                                Menu
                            </option>


                            <option value="settings">
                                Account Settings
                            </option>


                            <option value="orders">
                                Orders
                            </option>


                            <option value="logout">
                                Logout
                            </option>


                        </select>



                    </div>

                )
            }






            {/* Login Button */}

            {
                !loading && user == null && (

                    <Link

                        to="/login"

                        className="
                            group
                            relative
                            inline-flex
                            items-center
                            justify-center
                            rounded-full
                            px-8
                            py-3
                            font-semibold
                            text-secondary
                            bg-primary
                            border
                            border-secondary/30
                            shadow-md
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-xl
                            hover:shadow-accent/30
                            active:scale-95
                        "

                    >

                        <span className="relative z-10">
                            Login →
                        </span>


                    </Link>

                )
            }



        </div>

    );

}