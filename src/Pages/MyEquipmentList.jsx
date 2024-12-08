import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Swal from "sweetalert2";
import {  Slide } from "react-awesome-reveal";


const MyEquipmentList = () => {
    const {user}=useContext(AuthContext)
    const [myEquipments,setMyEquipments]=useState([])
    useEffect(()=>{
   fetch(`https://sports-equipments-server-side.vercel.app/equipments/email/${user.email}`).then(res=>res.json()).then(data=>{
    setMyEquipments(data)
   })
    },[user.email])
    // console.log(myEquipments)
    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-equipments-server-side.vercel.app/equipments/${id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(()=>{
                           Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            //   console.log(data)
            const newEquipment=myEquipments.filter(euip=>euip._id!=id)
            setMyEquipments(newEquipment)
                })
           
            }
          });
                 }
    return (
        <div className="w-11/12 mx-auto my-6">
            <div>
                  <div className="flex justify-center items-center text-center mt-6 mb-10">
                <div className="md:w-2/3">
                  <Slide>
                  <h2 className="font-bold text-3xl">My Added Product</h2>
                  <p>Encompasses a wide range of gear and tools designed for various sports activities, including balls, bats, rackets, protective gear, and training accessories, catering to athletes of all skill levels.</p>
                  </Slide>
                </div>
            </div>
            </div>
           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
                 myEquipments.map(equipemt => <div key={equipemt._id}>
                    <div className="card bg-base-100  shadow-xl">
                        <figure>
                            <img
                                src={equipemt.image}
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Item Name : {equipemt.itemName}

                            </h2>
                            <div className="flex justify-center flex-col">
                                <div className="flex text-black font-semibold gap-2"><p className="opacity-70">Category Name :  </p> <p>{equipemt.categoryName}</p></div>
                                <div className="flex text-black font-semibold gap-2"><p className="opacity-70">Stack Status :  </p> <p>{equipemt.status}</p></div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex text-black font-semibold gap-2"><p className="opacity-70">Price :  </p> <p className="flex gap-1 items-center">{equipemt.price} <FaBangladeshiTakaSign></FaBangladeshiTakaSign></p></div>
                                <div className="flex text-black font-semibold gap-2"><p className="opacity-70">Rating :  </p> <p>{equipemt.rating}</p></div>
                            </div>
                            <div className="card-actions flex-nowrap justify-center my-2">
                              <Link className=" btn rounded-lg w-1/3 bg-blue-100"  to={`/update/${equipemt._id}`}>Update</Link>
                                <div className="btn rounded-lg w-1/3 bg-blue-100" onClick={()=>handleDelete(equipemt._id)} >Delete</div>
                                <Link className="btn rounded-lg w-1/3 bg-blue-100" to={`/details/${equipemt._id}`}>View Details</Link>

                            </div>
                        </div>
                    </div>
                </div>


                )
            }
           </div>
        </div>
    );
};

export default MyEquipmentList;