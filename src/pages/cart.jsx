import { FaChevronDown, FaChevronUp, FaTrash } from "react-icons/fa";
import { addToCart, loadCart } from "../utils/cart";
import {  useState } from "react";
import { Link } from "react-router-dom";

export default function CartPage() {

      const [cart , setCart] = useState(loadCart())

      const [cartLoaded , setcardLoaded] = useState(false)

    
    function getTotal(){
        let total = 0;

        cart.forEach((item)=>{
            total += item.price * item.quantity;
        });

        return total;
    }
    
  


    return (
        <div className="w-full min-h-[calc(100vh-100px)] bg-primary flex flex-col items-center pt-10 px-5">

            <h1 className="text-4xl font-bold text-secondary mb-8">
                Your Shopping Cart
            </h1>


            <div className="w-full max-w-[950px] flex flex-col gap-5">


                {
                    cart.map((item,index)=>{

                        return (

                            <div 
                            key={index}
                            className="
                            w-full
                            min-h-[150px]
                            bg-white
                            rounded-2xl
                            shadow-lg
                            flex
                            items-center
                            p-4
                            hover:shadow-2xl
                            transition
                            duration-300
                            "
                            >


                                {/* Image */}

                                <div className="
                                h-[120px]
                                w-[120px]
                                rounded-xl
                                overflow-hidden
                                ">
                                    <img 
                                    src={item.image}
                                    className="
                                    h-full
                                    w-full
                                    object-cover
                                    hover:scale-110
                                    transition
                                    duration-300
                                    "
                                    />
                                </div>



                                {/* Details */}

                                <div className="
                                flex-1
                                px-6
                                flex
                                flex-col
                                justify-center
                                ">

                                    <h1 className="
                                    text-xl
                                    font-bold
                                    text-secondary
                                    ">
                                        {item.name}
                                    </h1>


                                    <span className="
                                    text-sm
                                    text-gray-500
                                    mt-2
                                    ">
                                        Product ID : {item.productID}
                                    </span>


                                </div>




                                {/* Quantity */}

                                <div className="
                                bg-secondary
                                text-white
                                rounded-xl
                                w-[90px]
                                h-[120px]
                                flex
                                flex-col
                                justify-center
                                items-center
                                gap-3
                                ">

                                    <FaChevronUp className="
                                    text-xl
                                    hover:text-accent
                                    cursor-pointer
                                    " onClick={()=>{
                                   addToCart(item,1)
                                   setCart([...loadCart()])
                                    }}/>


                                    <span className="
                                    text-3xl
                                    font-bold
                                    ">
                                        {item.quantity}
                                    </span>


                                    <FaChevronDown className="
                                    text-xl
                                    hover:text-accent
                                    cursor-pointer
                                    "onClick={()=>{
                                        addToCart(item,-1)
                                        setCart([...loadCart()])
                                    }}
                                    />


                                </div>





                                {/* Price */}

                                <div className="
                                w-[180px]
                                flex
                                flex-col
                                items-end
                                px-5
                                ">


                                    {
                                    item.labelledPrice > item.price &&
                                    (
                                    <span className="
                                    text-gray-400
                                    line-through
                                    text-sm
                                    ">
                                    LKR {item.labelledPrice.toFixed(2)}
                                    </span>
                                    )
                                    }



                                    <span className="
                                    text-accent
                                    text-2xl
                                    font-bold
                                    mt-2
                                    ">
                                    LKR {item.price.toFixed(2)}
                                    </span>


                                </div>




                                {/* Delete Button */}

                                <button
                                className="
                                h-[45px]
                                w-[45px]
                                rounded-full
                                bg-red-100
                                text-red-500
                                flex
                                justify-center
                                items-center
                                hover:bg-red-500
                                hover:text-white
                                transition
                                duration-300
                                "
                                 onClick={()=>{
                                    addToCart(item,-item.quantity)
                                    setCart(loadCart())
                                 }}>

                                    <FaTrash/>

                                </button>



                            </div>


                        )

                    })
                }




                {/* Cart Summary */}

                <div className="
                w-full
                bg-white
                rounded-2xl
                shadow-xl
                p-6
                flex
                justify-between
                items-center
                mt-5
                ">


                    <div>

                        <h2 className="
                        text-xl
                        font-semibold
                        text-secondary
                        ">
                            Cart Summary
                        </h2>


                        <p className="
                        text-gray-500
                        mt-1
                        ">
                            {cart.length} items in your cart
                        </p>


                    </div>




                    <div className="
                    flex
                    flex-col
                    items-end
                    ">


                        <span className="
                        text-gray-500
                        text-sm
                        ">
                            Total Amount
                        </span>


                        <span className="
                        text-4xl
                        font-bold
                        text-accent
                        ">
                            LKR {getTotal().toFixed(2)}
                        </span>



                        <Link  to='/checkout' state={cart}
                        className="
                        mt-3
                        bg-secondary
                        text-white
                        px-8
                        py-3
                        rounded-xl
                        font-semibold
                        hover:bg-accent
                        transition
                        duration-300
                        "
                        >
                            Checkout
                        </Link>


                    </div>



                </div>



            </div>


        </div>
    )
}