import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";
import toast from "react-hot-toast";
import axios from "axios";



export default function AddProductPage() {

  const [productId, setProductId] = useState("");
  const [name, setName] = useState(" ");
  const [altName, setAltNames] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState(0);
  const [labelledPrice, setLabelledPrice] = useState(0);
  const [catergory, setCategory] = useState("cream");
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  async function addProduct(){
    const token = localStorage.getItem("token");
    if (token == null ){
      navigate ("/login");
      return 
      
    }

    const promises =[]
    for(let i=0; i<images.length; i++){
       
      promises[i] = mediaUpload(images[i])

    }

    try{
     const urls = await Promise.all(promises)
    const alternativeNames = altName.split(",");

     const product = {
             productID : productId,
             name : name ,
             alternates: alternativeNames,
             description : description,
             images : urls,
             price : price,
             labelledPrice : labelledPrice,
             category:catergory,
             stock: stock

     }
         await axios.post(import.meta.env.VITE_API_URL+"/api/products",product,
         { headers: {
            Authorization : "Bearer " + token
          }}
         )
         toast.success("Product added successfully");
         navigate("/admin/products");

    }catch  {
       toast.error("An error occurred");
}

    

  

  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-8">

      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-accent/20 p-10">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-secondary">
            Add New Product
          </h1>
          <p className="text-gray-500 mt-2">
            Fill in the product details below.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">

          <div className="flex flex-col">
            <label className="text-secondary font-semibold mb-2">
              Product ID
            </label>
            <input
              value={productId}
              onChange={(e) => { setProductId(e.target.value) }}
              placeholder="Enter Product ID"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-secondary font-semibold mb-2">
              Product Name
            </label>
            <input
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              placeholder="Enter Product Name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent transition"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="text-secondary font-semibold mb-2">
              Alternative Name
            </label>
            <input
              value={altName}
              onChange={(e) => { setAltNames(e.target.value) }}
              placeholder="Alternative Name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent transition"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="text-secondary font-semibold mb-2">
              Description
            </label>
            <textarea
              rows="5"
              value={description}
              onChange={(e) => { setDescription(e.target.value) }}
              placeholder="Write product description..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-accent focus:ring-2 focus:ring-accent transition"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="text-secondary font-semibold mb-2">
              Product Images
            </label>

            <input
              type="file"
              onChange={(e) => { setImages(e.target.files) }}
              multiple
              className="w-full rounded-xl border border-dashed border-accent bg-primary p-4 file:bg-accent file:text-white file:border-0 file:px-5 file:py-2 file:rounded-lg file:cursor-pointer cursor-pointer"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-secondary font-semibold mb-2">
              Price
            </label>

            <input
              type="number"
              value={price}
              onChange={(e) => (setPrice(e.target.value))}
              placeholder="0.00"
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-secondary font-semibold mb-2">
              Labelled Price
            </label>

            <input
              type="number"
              value={labelledPrice}
              onChange={(e) => (setLabelledPrice(e.target.value))}
              placeholder="0.00"
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-secondary font-semibold mb-2">
              Category
            </label>

            <select
              value={catergory}
              onChange={(e) => { setCategory(e.target.value) }}
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none bg-white focus:border-accent focus:ring-2 focus:ring-accent transition"
            >
              <option value="cream">Cream</option>
              <option value="lotion">Lotion</option>
              <option value="serum">Serum</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-secondary font-semibold mb-2">
              Stock
            </label>

            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="0"
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent transition"
            />
          </div>

        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button onClick={()=>{
            navigate("/admin/products")
          }}
            type="button"
            className="px-8 py-3 rounded-xl border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition duration-300 cursor-pointer"
          >
            Cancel
          </button>

          <button onClick={addProduct}
            type="submit"
            className="px-8 py-3 rounded-xl bg-accent text-white font-semibold shadow-lg hover:bg-orange-600 transition duration-300 cursor-pointer"
          >
            Submit
          </button>
        </div>

      </div>

    </div>
  );
}