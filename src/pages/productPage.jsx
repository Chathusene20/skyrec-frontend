import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Loader } from "../components/loader";
import ProductCard from "../components/productCard.jsx";

export function ProductPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            axios
                .get(import.meta.env.VITE_API_URL + "/api/products")
                .then((response) => {
                    setProducts(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                    toast.error("Failed to load products");
                });
        }
    }, [isLoading]);
  
    return (
        
        <div className="w-full min-h-[calc(100vh-100px)] bg-primary">
            <div className="w-full h-[100px] flex justify-center items-center"></div>
             <input type="text" 
             onChange={async (e)=>{
                 try{
                    if (e.target.value == ""){
                        setIsLoading(true);
                    }else {
                        const searchResults = await axios.get (import.meta.env.VITE_API_URL + "/api/products/search/=" + e.target.value ); 
                        setProducts(searchResults.data);
                    }

                 }catch{
                    toast.error("Search Failed");
                 }
             }}
             placeholder="Search products..." className="px-4 py-2 rounded-lg border border-secondary/30"/> 
            {isLoading ? (
                <Loader />
            ) : (
                <div className="w-full h-full flex flex-wrap justify-center bg-primary">
                    {products.map((item) => {
                        console.log(item);

                        return(
                           <ProductCard key = {item.productID} product={item}/>
                        )
                      })}
                </div>
            )}
        </div>
    );
}