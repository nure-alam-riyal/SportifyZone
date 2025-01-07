import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
import { Slide } from "react-awesome-reveal";
import { FaBangladeshiTakaSign } from "react-icons/fa6";


const AllSportsEquipment = () => {
  // const {user}=useContext(AuthContext)
    const equipments=useLoaderData()
    // console.log(user.email)
    const [equipmentM,setEquipments]=useState(equipments)
    useEffect(()=>{
      // setEquipments(equipments)
    },[])
    // const {   itemName,image,email,categoryName,userName,description,status,price,customization,rating,dtime}=equipments
    // console.log(equipments)
    const handleSort=()=>{
                           
                  fetch(`https://sports-equipments-server-side.vercel.app/equipments`)  
                  .then(res=>res.json())
                  .then(data=>{
                    data.sort((a,b)=>(a.price-b.price))
                    setEquipments(data)
                    toast.success('sorted by price')
                  })
                          
                         
                         
                        
    }
    console.log(equipmentM)
    return (
        <div className="overflow-x-auto w-11/12 mx-auto mb-10">
            <div className="flex justify-center items-center text-center mt-6 mb-10">
                <div className="md:w-2/3">
                 <Slide>
                  <h2 className="font-bold text-3xl font-rancho">All Sports Equipments</h2>
                    <p>Encompasses a wide range of gear and tools designed for various sports activities, including balls, bats, rackets, protective gear, and training accessories, catering to athletes of all skill levels.</p>
                    </Slide>
               </div>
            </div>
  
        <div onClick={handleSort} className="btn bg-yellow-100 my-3 font-bold text-2xl">Sort By Price</div>
        
   
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        equipmentM?.map(equipemt => <div key={equipemt._id}>
                            <Link to={`/details/${equipemt._id}`}>
                                <div className="card bg-base-100 hover:scale-110  shadow-xl">
                                    <figure className="p-6">
                                        <img className="rounded-lg h-[150px]"
                                            src={equipemt.image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {equipemt.itemName}

                                        </h2>
                                        <div className="flex justify-center flex-col">
                                            <div className="flex  font-semibold gap-2 justify-center"> <p>{equipemt.categoryName}</p></div>

                                        </div>
                                        <div className="flex justify-between">
                                            <div className="flex  font-semibold gap-2"><p className="flex gap-1 items-center">{equipemt.price} <FaBangladeshiTakaSign></FaBangladeshiTakaSign></p></div>
                                            <div className="flex  font-semibold items-center gap-2">
                                                <div  className="rating rating-sm">
                                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                    <input
                                                        type="radio"
                                                        name="rating-6"
                                                        className="mask mask-star-2 bg-orange-400"
                                                        defaultChecked={equipemt.rating} />
                                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                                <p>({equipemt.rating})</p></div>
                                        </div>




                                    </div>
                                </div>
                            </Link>
                        </div>



                        )
                    }
                </div>
  
</div>
    );
};

export default AllSportsEquipment;