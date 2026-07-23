import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../components/loader";
import ImageSlider from "../components/imageSlider";
import { addToCart, loadCart } from "../utils/cart";

export default function ProductOverview() {
  const params = useParams();

  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/api/products/" + params.id)
      .then((res) => {
        setProduct(res.data);
        setStatus("success");
      })
      .catch(() => {
        toast.error("Failed to fetch product details");
        setStatus("error");
      });
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-100px)] bg-primary py-10 px-6 text-secondary">
      {status == "loading" && <Loader />}

      {status == "success" && (
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <h1 className="block lg:hidden text-3xl md:text-4xl text-center font-bold mt-5 mb-5">
             {product.name}
          </h1>
          
          {/* Left Side */}
          <div className="lg:w-1/2 w-full bg-primary flex justify-center items-center p-10">
            <div className="w-full max-w-[500px]">
              <ImageSlider images={product.images} />
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 w-full p-10 flex flex-col justify-center">

            {/* Product ID */}
            <span className="w-fit px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm">
              Product ID : {product.productID}
            </span>

            {/* Product Name */}
            <h1 className="text-4xl font-bold mt-5 leading-tight">
              {product.name}

              {product.alternates.map((name, index) => (
                <span
                  key={index}
                  className="text-xl font-normal text-secondary/60 ml-2"
                >
                  | {name}
                </span>
              ))}
            </h1>

            {/* Divider */}
            <div className="w-24 h-1 rounded-full bg-accent mt-5"></div>

            {/* Description */}
            <p className="text-lg text-secondary/80 leading-8 text-justify mt-8">
              {product.description}
            </p>

            {/* Category */}
            <div className="mt-8 flex items-center gap-3">
              <span className="font-semibold text-lg">Category :</span>

              <span className="px-4 py-2 rounded-full bg-secondary text-white text-sm">
                {product.category}
              </span>
            </div>

            {/* Price */}
            <div className="mt-10">
              {product.labelledPrice > product.price ? (
                <div className="flex items-center gap-5 flex-wrap">

                  <p className="text-2xl text-gray-400 line-through">
                    LKR {product.labelledPrice.toFixed(2)}
                  </p>

                  <p className="text-4xl font-bold text-accent">
                    LKR {product.price.toFixed(2)}
                  </p>

                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    SALE
                  </span>
                </div>
              ) : (
                <p className="text-4xl font-bold text-accent">
                  LKR {product.price.toFixed(2)}
                </p>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-primary rounded-xl p-4 shadow">
                <h2 className="font-semibold text-secondary">🚚 Free Delivery</h2>
                <p className="text-sm text-secondary/70 mt-2">
                  On orders above LKR 5000.
                </p>
              </div>

              <div className="bg-primary rounded-xl p-4 shadow">
                <h2 className="font-semibold text-secondary">🔒 Secure Payment</h2>
                <p className="text-sm text-secondary/70 mt-2">
                  100% secure online checkout.
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-5 mt-12">

              <button className="w-1/2 h-14 rounded-xl border-2 border-accent text-accent font-semibold text-lg transition-all duration-300 hover:bg-accent hover:text-white"
              onClick={()=>{
                addToCart(product,1)
                toast.success("Added to the cart")
              }}>
                Add to Cart
              </button>

              <Link to='/checkout'state={[{
                image : product.images[0],
                productID : product.productID,
                name : product.name,
                price : product.price,
                labelledPrice : product .labelledPrice,
                quantity: 1 
              }]} className="w-1/2 h-14 rounded-xl bg-accent text-white text-center pt-[12px] font-semibold text-lg shadow-lg transition-all duration-300 hover:bg-orange-600 hover:scale-105 "
                     
               >
                Buy Now
              </Link>

            </div>

          </div>
        </div>
      )}

      {status == "error" && (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="bg-white shadow-xl rounded-2xl p-10">
            <h1 className="text-2xl text-red-500 font-bold">
              Failed to load product details
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}