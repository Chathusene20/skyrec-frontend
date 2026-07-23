import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import UserData from "./userData";

export default function Header(){
  
    const [isSideBarOpen , setIsSidebarOpen] = useState(false);



    return(
        <header className="w-full bg-accent  h-[100px] text-white px-[40px]">
            <div className="w-full h-full flex relative ">
            <img src ="/skyrec logo.png" className="hidden lg:flex h-full absolute w-[200px] left-0 border object-cover"/>
            <div className="lg:hidden w-full flex justify-center items-center relative">
                <MdMenu
                className="absolute left-0 text-3xl"
                onClick={()=> setIsSidebarOpen(true)}
                />
             <img 
             src ="/skyrec logo.png" 
             className=" h-full  w-[200px]   object-cover"/>
            </div>
               {
                isSideBarOpen &&
                <div className="fixed top-0 left-0 w-full h-screen bg-[#00000080] z-100 text-secondary">
                    <div className="w-[300px] bg-primary h-full flex flex-col ">
                         <div className="lg:hidden w-full h-[100px] bg-accent flex justify-center items-center relative">
                          <MdMenu
                            className="absolute left-2 text-white  text-3xl"
                            onClick={()=> setIsSidebarOpen(false)}
                         />
                      <img 
                     src ="/skyrec logo.png" 
                     className=" h-full  w-[200px]   object-cover"/>
                     

                     </div>
                     <a href="/" className="p-4 border-b border-secondary/10 ">
                     Home 
                     </a>
                     <a href="/products" className="p-4 border-b border-secondary/10 ">
                     Products
                     </a>
                     <a href="/about" className="p-4 border-b border-secondary/10 ">
                     About 
                     </a>
                     <a href="/contact" className="p-4 border-b border-secondary/10 ">
                     Contacts  
                     </a>
                     <a href="/cart" className="p-4 border-b border-secondary/10 ">
                     Cart
                     </a>
                    
                     <div className=" lg:hidden flex w-[200px] absolute bottom-[70px] px-38 justify-center items-center gap-4"><UserData/></div>

                    </div>

                </div>
               }
             
             <div className="hidden h-full lg:flex  justify-center items-center w-full text-lg gap-[20px]">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                
             </div>
             <div className="h-full hidden lg:flex w-[200px] absolute right-[100px] top-0  justify-center items-center gap-4"><UserData/></div>
             <Link to="/cart" className="h-full absolute text-3xl right-0 hidden lg:flex justify-center items-center">
             <AiOutlineShoppingCart/>
             </Link>
             </div>
             
        </header>
        
    )
}