import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBangladeshiTakaSign } from "react-icons/fa6";



const Home = () => {
    const equipments = useLoaderData(AuthContext)
    // const {   itemName,image,email,categoryName,userName,description,status,price,customization,rating,dtime}=equipments
    return (
        <div>
            <section>
                <div></div>
                <div className="grid grid-cols-3 gap-6">
                    {
                        equipments.slice(0,6).map(equipemt => <div key={equipemt._id}>
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
                                    <div className="card-actions justify-center">
                                        <div className="btn rounded-lg w-1/2 bg-blue-100"><Link to={`/details/${equipemt._id}`}>View Details</Link></div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        )
                    }
                </div>

            </section>
        </div>
    );
};

export default Home;