import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";


const MyEquipmentList = () => {
    const {user}=useContext(AuthContext)
    const [myEquipments,setMyEquipments]=useState([])
    useEffect(()=>{
   fetch(`http://localhost:4871/equipments/email/${user.email}`).then(res=>res.json()).then(data=>{
    setMyEquipments(data)
   })
    },[user.email])
    console.log(myEquipments)
    return (
        <div>
           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
                 myEquipments.map(equipemt => <div key={equipemt._id}>
                    <div className="card bg-base-100  shadow-xl">
                        <figure>
                            <img
                                src={equipemt.itemName}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Item Name : {equipemt.itemName}

                            </h2>
                            <div className="flex justify-between">
                                <div className="flex text-black font-semibold gap-2"><p className="opacity-70">Category Name :  </p> <p>{equipemt.categoryName}</p></div>
                                <div className="flex text-black font-semibold gap-2"><p className="opacity-70">Stack Status :  </p> <p>{equipemt.status}</p></div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex text-black font-semibold gap-2"><p className="opacity-70">Price :  </p> <p className="flex gap-1 items-center">{equipemt.price} <FaBangladeshiTakaSign></FaBangladeshiTakaSign></p></div>
                                <div className="flex text-black font-semibold gap-2"><p className="opacity-70">Rating :  </p> <p>{equipemt.rating}</p></div>
                            </div>
                            <div className="card-actions flex-nowrap justify-center my-2">
                                <div className="btn rounded-lg w-1/3 bg-blue-100"><Link to={`/update/${equipemt._id}`}>Update</Link></div>
                                <div className="btn rounded-lg w-1/3 bg-blue-100"><Link >Delete</Link></div>

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