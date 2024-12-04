import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBangladeshiTakaSign } from "react-icons/fa6";



const Home = () => {
    const equipments = useLoaderData(AuthContext)
    // const {   itemName,image,email,categoryName,userName,description,status,price,customization,rating,dtime}=equipments
    return (
        <div className="w-11/12 mx-auto">
            <section>
                <div> <div className="flex justify-center items-center text-center mt-6 mb-10">
                <div className="md:w-2/3">
                    <h2 className="font-bold text-3xl">Products</h2>
                    <p>Encompasses a wide range of gear and tools designed for various sports activities, including balls, bats, rackets, protective gear, and training accessories, catering to athletes of all skill levels.</p>
                </div>
            </div>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        equipments.slice(0,6).map(equipemt => <div key={equipemt._id}>
                            <div className="card bg-base-100  shadow-xl">
                                <figure className="p-6">
                                    <img className="rounded-lg"
                                        src={equipemt.image}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Item Name : {equipemt.itemName}

                                    </h2>
                                    <div className="flex justify-center flex-col">
                                        <div className="flex text-black font-semibold gap-2 justify-center"><p className="opacity-70">Category Name :  </p> <p>{equipemt.categoryName}</p></div>
                                        <div className="flex text-black font-semibold gap-2 justify-center"><p className="opacity-70">Stack Status :  </p> <p>{equipemt.status}</p></div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex text-black font-semibold gap-2"><p className="opacity-70">Price :  </p> <p className="flex gap-1 items-center">{equipemt.price} <FaBangladeshiTakaSign></FaBangladeshiTakaSign></p></div>
                                        <div className="flex text-black font-semibold gap-2"><p className="opacity-70">Rating :  </p> <p>{equipemt.rating}</p></div>
                                    </div>
                                    <div className="card-actions justify-center my-3">
                                        <Link className="btn rounded-lg w-1/2 bg-blue-100" to={`/details/${equipemt._id}`}>View Details</Link>

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