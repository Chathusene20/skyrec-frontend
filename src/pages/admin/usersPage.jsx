import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { MdOutlineAdminPanelSettings, MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/loader";


function UserBlockConfirm(props) {

    const email = props.user?.email;
    const close = props.close;
    const refresh = props.refresh;


    function blockUser() {

        const token = localStorage.getItem("token");

        axios.put(
            import.meta.env.VITE_API_URL +
            "/api/users/block/" +
            encodeURIComponent(email),

            {
                isBlock: !props.user.isBlock
            },

            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        .then((response) => {

            console.log(response.data);

            toast.success(
                "User block status changed successfully"
            );

            close();

            refresh();

        })

        .catch((error) => {

            console.log(error.response?.data || error);

            toast.error(
                "Failed to change user block status"
            );

        });
    }



    return (

        <div className="
            fixed left-0 top-0 w-full h-screen
            bg-[#00000050] z-[100]
            flex justify-center items-center
        ">


            <div className="
                w-[500px] h-[200px]
                bg-primary rounded-2xl
                relative flex flex-col
                justify-center items-center
                gap-[40px]
            ">


                <button

                    onClick={close}

                    className="
                    absolute right-[-42px]
                    top-[-42px]
                    w-[40px] h-[50px]
                    bg-red-600
                    rounded-full
                    text-white
                    font-bold
                    hover:bg-white
                    hover:text-red-600
                    "
                >

                    X

                </button>



                <p className="
                    text-xl font-semibold
                    text-center
                ">

                    Are you sure you want to 
                    {props.user?.isBlock ? " unblock " : " block "}
                    the user?

                    <br/>

                    {email}

                </p>




                <div className="flex gap-[40px]">


                    <button

                        onClick={close}

                        className="
                        w-[100px]
                        bg-blue-600
                        p-[5px]
                        text-white
                        hover:bg-accent
                        "
                    >

                        Cancel

                    </button>




                    <button

                        onClick={blockUser}

                        className="
                        w-[100px]
                        bg-red-600
                        p-[5px]
                        text-white
                        hover:bg-accent
                        "
                    >

                        Yes

                    </button>


                </div>


            </div>


        </div>

    );

}





export default function AdminUsersPage() {


    const [users,setUsers] = useState([]);

    const [isBlockConfirmVisible,setBlockConfirmVisible] =
        useState(false);

    const [userToBlock,setUserToBlock] =
        useState(null);

    const [isLoading,setLoading] =
        useState(true);


    const navigate = useNavigate();




    useEffect(()=>{


        if(!isLoading){
            return;
        }


        const token = localStorage.getItem("token");



        if(token == null){

            toast.error(
                "Please login to access admin panel"
            );

            navigate("/login");

            return;

        }



        axios.get(

            import.meta.env.VITE_API_URL +
            "/api/users/all-users",

            {

                headers:{

                    Authorization:
                    "Bearer " + token

                }

            }

        )


        .then((response)=>{


            setUsers(response.data);

            setLoading(false);


        })


        .catch((error)=>{


            console.log(error);

            toast.error(
                "Failed to load users"
            );


            setLoading(false);


        });



    },[isLoading,navigate]);






    return (

        <div className="
            w-full h-full
            bg-primary
            p-8
        ">




            {
                isBlockConfirmVisible &&
                userToBlock &&

                <UserBlockConfirm

                    user={userToBlock}

                    refresh={()=>{
                        setLoading(true)
                    }}

                    close={()=>{
                        setBlockConfirmVisible(false)
                    }}

                />

            }







            <div className="
                bg-white
                rounded-2xl
                shadow-lg
                overflow-hidden
            ">



                <div className="
                    bg-secondary
                    px-8 py-5
                ">

                    <h1 className="
                        text-2xl
                        font-bold
                        text-primary
                    ">

                        User Management

                    </h1>


                </div>






                <div className="overflow-x-auto">



                    {

                    isLoading ?

                    <Loader/>

                    :


                    <table className="
                        w-full
                        table-auto
                        border-collapse
                    ">



                        <thead className="
                            bg-secondary
                            text-primary
                        ">


                            <tr>


                                <th className="px-4 py-4">
                                    Image
                                </th>


                                <th className="px-4 py-4">
                                    Email
                                </th>


                                <th className="px-4 py-4">
                                    First Name
                                </th>


                                <th className="px-4 py-4">
                                    Last Name
                                </th>


                                <th className="px-4 py-4">
                                    Role
                                </th>


                                <th className="px-4 py-4">
                                    Actions
                                </th>


                            </tr>


                        </thead>






                        <tbody>


                        {

                        users.map((user,index)=>(


                            <tr

                            key={user.email}

                            className={`
                            border-b
                            hover:bg-primary
                            ${
                            index % 2 === 0
                            ? "bg-white"
                            : "bg-gray-50"
                            }
                            `}

                            >




                            <td className="px-4 py-4 text-center">


                                <img

                                src={user.image}

                                alt={user.firstName}

                                className={`
                                w-16 h-16
                                rounded-full
                                object-cover
                                border-2
                                ${
                                user.isBlock
                                ?
                                "border-red-600"
                                :
                                "border-green-600"
                                }
                                `}

                                />


                            </td>







                            <td className="
                                px-4 py-4
                                text-center
                            ">


                                <div className="
                                    flex
                                    justify-center
                                    items-center
                                    gap-2
                                ">


                                    {user.email}


                                    {

                                    user.isEmailVerified &&

                                    <MdVerified
                                    color="blue"
                                    />

                                    }


                                </div>


                            </td>






                            <td className="
                                px-4 py-4
                                text-center
                            ">

                                {user.firstName}

                            </td>





                            <td className="
                                px-4 py-4
                                text-center
                            ">

                                {user.lastName}

                            </td>






                            <td className="
                                px-4 py-4
                                text-center
                            ">


                                <div className="
                                    flex
                                    justify-center
                                    items-center
                                    gap-2
                                ">


                                {

                                user.role === "admin" &&

                                <MdOutlineAdminPanelSettings/>

                                }


                                {user.role}


                                </div>



                            </td>







                            <td className="
                                px-4 py-4
                                text-center
                            ">



                                <button


                                onClick={()=>{


                                    setUserToBlock(user);

                                    setBlockConfirmVisible(true);


                                }}



                                className="
                                w-[100px]
                                h-[30px]
                                rounded-full
                                bg-accent
                                text-white
                                hover:opacity-70
                                "

                                >


                                {

                                user.isBlock

                                ?

                                "Unblock"

                                :

                                "Block"

                                }


                                </button>



                            </td>




                            </tr>


                        ))


                        }


                        </tbody>




                    </table>


                    }


                </div>




            </div>




        </div>

    );

}