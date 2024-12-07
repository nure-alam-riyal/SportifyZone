import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
    const equipments=useLoaderData()
    const [equipmentM,setEquipments]=useState(equipments)
    // const {   itemName,image,email,categoryName,userName,description,status,price,customization,rating,dtime}=equipments
    // console.log(equipments)
    const handleSort=()=>{
                          const newEquipment=equipmentM?.sort((b,a) => (a?.price-b?.price))
                     
                          setEquipments(newEquipment)
                          toast.success('sorted by price')
                         
                        
    }
    return (
        <div className="overflow-x-auto  w-11/12 mx-auto mb-10">
            <div className="flex justify-center items-center text-center mt-6 mb-10">
                <div className="md:w-2/3">
                    <h2 className="font-bold text-3xl font-rancho">All Sports Equipments</h2>
                    <p>Encompasses a wide range of gear and tools designed for various sports activities, including balls, bats, rackets, protective gear, and training accessories, catering to athletes of all skill levels.</p>
                </div>
            </div>
  <table className="table text-center w-full">
    {/* head */}
    <thead>
    <tr >
        <th></th>
        <th></th>
        <th></th>
        <th onClick={handleSort} className="btn bg-yellow-100 my-3 font-bold text-2xl">Sort By Price</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
   
    <thead className="bg-blue-300 font-bold font-rancho text-black text-xl">
      <tr >
        <th>NO</th>
        <th>Item Name</th>
        <th>Category Name</th>
        <th>Price</th>
        <th>Stock Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {equipmentM?.map((equipment,index)=>
    <tr key={equipment._id}>
        <td>{index+1}</td>
        <td>{equipment?.itemName}</td>
        <td>{equipment?.categoryName}</td>
        <td>{equipment?.price}</td>
        <td>{equipment?.status}</td>
        <td><Link className="btn" to={`/details/${equipment?._id}`}>View Details</Link></td>
      </tr>
    )}
      
     
    </tbody>
  </table>
</div>
    );
};

export default AllSportsEquipment;