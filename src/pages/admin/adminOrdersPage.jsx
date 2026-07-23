import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/loader";
import toast from "react-hot-toast";



export default function adminOrdersPage() {


    const [orders,setOrders] = useState([]);

    const [isLoading,setLoading] = useState(true);

    const [isModalOpen,setIsModalOpen] = useState(false);

    const [selectedOrder,setSelectedOrder] = useState(null);

    const [status,setStatus] = useState("");

    const navigate = useNavigate();



    useEffect(()=>{


        const token = localStorage.getItem("token");


        if(!token){

            navigate("/login");
            return;

        }



        axios.get(

            import.meta.env.VITE_API_URL + "/api/orders",

            {

                headers:{

                    Authorization:"Bearer " + token

                }

            }

        )


        .then((res)=>{


            setOrders(res.data);

            setLoading(false);


        })


        .catch((err)=>{


            console.log(err);

            toast.error("Failed to load orders");

            setLoading(false);


        });



    },[navigate]);





    const closeModal = ()=>{

        setIsModalOpen(false);

        setSelectedOrder(null);

        setStatus("");

    };




    const openModal=(order)=>{


        setSelectedOrder(order);

        setStatus(order.status);

        setIsModalOpen(true);


    };
return (

<div className="w-full h-full bg-primary p-8">


{/* MODAL */}

{
isModalOpen && selectedOrder && (

<div className="fixed inset-0 bg-[#00000050] z-[100] flex justify-center items-center">


<div className="w-[600px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl p-8 relative">


<button

onClick={closeModal}

className="absolute right-5 top-5 text-xl font-bold"

>

✕

</button>



<h1 className="bg-secondary text-primary text-2xl font-bold text-center p-4 rounded-xl mb-6">

Order Details

</h1>




<div className="space-y-3">


<p>
<b>Order ID:</b> {selectedOrder.orderID}
</p>


<p>
<b>Customer Name:</b> {selectedOrder.customerName}
</p>


<p>
<b>Email:</b> {selectedOrder.email}
</p>


<p>
<b>Phone:</b> {selectedOrder.phone}
</p>


<p>
<b>Address:</b> {selectedOrder.address}
</p>


<p>
<b>Total:</b> LKR {Number(selectedOrder.total).toFixed(2)}
</p>


<p>
<b>Status:</b> {selectedOrder.status}
</p>


</div>





<h2 className="text-xl font-bold text-secondary mt-8 mb-4">

Ordered Items

</h2>



{
selectedOrder.items?.map((item,index)=>(


<div

key={index}

className="flex gap-4 bg-primary p-4 rounded-xl mb-3"

>


<img

src={item.image}

className="w-20 h-20 object-cover rounded-lg"

/>


<div>

<h3 className="font-bold">

{item.name}

</h3>


<p>
Quantity : {item.quantity}
</p>


<p>
Price : LKR {Number(item.price).toFixed(2)}
</p>


</div>


</div>


))

}




<div className="flex justify-center mt-8">


<button

onClick={closeModal}

className="bg-secondary text-primary px-10 py-3 rounded-xl"

>

Close

</button>


</div>



</div>


</div>


)

}






{/* ORDER TABLE */}



<div className="bg-white rounded-2xl shadow-lg overflow-hidden">


<div className="bg-secondary px-8 py-5">


<h1 className="text-2xl font-bold text-primary">

Order Management

</h1>


</div>





<div className="overflow-x-auto">


{

isLoading ?

<Loader/>


:


<table className="w-full">


<thead className="bg-secondary text-primary">


<tr>

<th className="p-4">
Order ID
</th>


<th className="p-4">
Items
</th>


<th className="p-4">
Customer
</th>


<th className="p-4">
Email
</th>


<th className="p-4">
Phone
</th>


<th className="p-4">
Address
</th>


<th className="p-4">
Total
</th>


<th className="p-4">
Status
</th>


<th className="p-4">
Date
</th>


</tr>


</thead>





<tbody>


{

orders.map((item,index)=>(


<tr

key={item.orderID}

onClick={()=>openModal(item)}

className={`cursor-pointer hover:bg-primary ${
index%2===0 ? "bg-white" : "bg-gray-50"
}`}

>



<td className="p-4 text-center">

{item.orderID}

</td>



<td className="p-4 text-center">

{item.items?.length || 0}

</td>




<td className="p-4 text-center">

{item.customerName}

</td>





<td className="p-4 text-center">

{item.email}

</td>





<td className="p-4 text-center">

{item.phone}

</td>





<td className="p-4 text-center">

{item.address}

</td>





<td className="p-4 text-center">

LKR {Number(item.total).toFixed(2)}

</td>





<td className="p-4 text-center">

{item.status}

</td>





<td className="p-4 text-center">

{new Date(item.date).toLocaleDateString()}

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