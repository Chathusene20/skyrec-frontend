import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { PiPlus } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../../components/loader";

function ProductDeleteConfirm(props){
     const productID=props.productID;
     const close=props.close;
     const refresh = props.refresh;
     function deleteProduct(){
        const token = localStorage.getItem("token");
        axios 
        .delete(import.meta.env.VITE_API_URL + "/api/products/" + productID,{
        headers: {
           Authorization: `Bearer ${token}`
        }
     })
        .then((response) =>{
            console.log(response.data);
            close();
            toast.success("Product deleted successfully");
            refresh();
        }).catch(() => {
            toast .error ("Failed to delete product");
        });
     }

     return <div className="fixed left-0 top-0 w-full h-screen bg-[#00000050] z-[100] flex justify-center items-center">
        <div className="w-[500px] h-[200px] bg-primary rounded-2xl relative flex flex-col  justify-center items-center gap-[40px]">
            <button onClick={close}className="absolute right-[-42px] top-[-42px] w-[40px] h-[50px] bg-red-600 rounded-full text-white flex justify-center items-center font-bold border border-red-600 hover:bg-white hover:text-red-600
             ">
                X
            </button>
            <p className="text-xl font-semibold" > Are you sure you want to delete the product with product ID ? : {productID} </p>
            <div className="flex gap-[40px]">
                <button onClick={close} className="w-[100px] bg-blue-600 p-[5px] text-white hover:bg-accent  ">
                   Cancel 
                </button>

                <button onClick={deleteProduct} className="w-[100px] bg-red-600 p-[5px] text-white hover:bg-accent  ">
                    Yes
                </button>

            </div>
        </div>

     </div>
}

export default function AdminProductPage() {

    const [products, setProducts] = useState([]);
    const [isDeleteConfirmVisible,setDeleteConfirmVisible] =useState(false);
    const [productToDelete, setProductToDelete]=useState(null);
    const [isLoading,setLoading]=useState (true)
    const navigate = useNavigate();


    useEffect(() => {
        if(isLoading){

       
        const token = localStorage.getItem("token");

        axios.get(import.meta.env.VITE_API_URL + "/api/products", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then((response) => {
            setProducts(response.data);
           setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
         }
    }, [isLoading]);

    return (
        <div className="w-full h-full bg-primary p-8">
           {
           isDeleteConfirmVisible &&
    <ProductDeleteConfirm
        refresh={() => setLoading(true)}
        productID={productToDelete}
        close={() => setDeleteConfirmVisible(false)}
    />
           }
         <Link to ="/admin/add-product" className ="fixed right-[50px] bottom-[50px] text-5xl hover:text-accent"> <CiCirclePlus className="hover:text-accent" /> </Link>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* Header */}
                <div className="bg-secondary px-8 py-5">
                    <h1 className="text-2xl font-bold text-primary">
                        Product Management
                    </h1>
                </div>

                <div className="overflow-x-auto">

                 {isLoading?<Loader/>:
                   <table className="w-full table-auto border-collapse">

                        <thead className="bg-secondary text-primary">
                            <tr>
                                <th className="px-4 py-4 text-center">Image</th>
                                <th className="px-4 py-4 text-center">Product ID</th>
                                <th className="px-4 py-4 text-center">Product Name</th>
                                <th className="px-4 py-4 text-center">Product Price</th>
                                <th className="px-4 py-4 text-center">Labelled Price</th>
                                <th className="px-4 py-4 text-center">Stock</th>
                                <th className="px-4 py-4 text-center">Category</th>
                                <th className="px-4 py-4 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((item, index) => (
                                <tr
                                    key={item.productID}
                                    className={`border-b border-gray-200 hover:bg-primary transition-all duration-200 ${
                                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    }`}
                                >
                                    <td className="px-4 py-4 text-center">
                                        <div className="flex justify-center">
                                            <img
                                                src={item.images[0]}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded-xl shadow-md"
                                            />
                                        </div>
                                    </td>

                                    <td className="px-4 py-4 text-center font-medium text-secondary">
                                        {item.productID}
                                    </td>

                                    <td className="px-4 py-4 text-center font-semibold text-secondary">
                                        {item.name}
                                    </td>

                                    <td className="px-4 py-4 text-center font-semibold text-green-700">
                                        Rs. {item.price}
                                    </td>

                                    <td className="px-4 py-4 text-center text-gray-500 line-through">
                                        Rs. {item.labelledPrice}
                                    </td>

                                    <td className="px-4 py-4 text-center text-gray-500">
                                        <span className="text-sm">
                                                {item.stock}
                                        </span>
                                        
                                    </td>
                                    

                                    <td className="px-4 py-4 text-center">
                                        <span className="px-3 py-1 rounded-full bg-primary text-secondary text-sm font-medium">
                                            {item.category}
                                        </span>
                                    </td>

                                    <td className="px-4 py-4 text-center">
                                        <div className="flex justify-center items-center gap-3">
                                            <button className="w-10 h-10 rounded-full bg-red-100 hover:bg-red-500 hover:text-white transition duration-300 flex justify-center items-center cursor-pointer"
                                             onClick ={()=>{
                                                setProductToDelete(item.productID);
                                               setDeleteConfirmVisible(true);
                                             }}
                                            >
                                                <FaRegTrashCan />
                                            </button>

                                            <button className="w-10 h-10 rounded-full bg-orange-100 text-accent hover:bg-accent hover:text-white transition duration-300 flex justify-center items-center cursor-pointer"
                                                onClick={() => navigate("/admin/update-product", { state: item })}
                                            >

                                                <FaRegEdit />
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
}
                </div>

            </div>

        </div>
    );
}