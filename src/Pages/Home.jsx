import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import im1 from '../assets/images (20).jpg'
import im2 from '../assets/images (19).jpg'
import im3 from '../assets/images (18).jpg'
import im4 from '../assets/images (16).jpg'
import { EffectFlip } from 'swiper/modules';


const Home = () => {
    const equipments = useLoaderData(AuthContext)
    // const {   itemName,image,email,categoryName,userName,description,status,price,customization,rating,dtime}=equipments
    return (
        <div className="w-11/12 mx-auto">
            <section>
            <Swiper
            effect="flip"
     modules={[Navigation, Pagination, Scrollbar, A11y,EffectFlip]}
     spaceBetween={50}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
     onSwiper={() =>{} }
     onSlideChange={() => {}}
    >
      <SwiperSlide >
       <div className="w-full bg-s4 text-white bg-no-repeat rounded-lg  bg-cover h-[600px]">
       <div className="flex justify-evenly flex-col lg:flex-row items-center bg-black bg-opacity-70 rounded-xl w-full h-full text-center"> 
            <div className="lg:w-1/2"><img className="w-full lg:p-16 -translate-y-6 skew-y-12" src={im1} alt="" /></div>
 <div className="lg:p-8 w-11/12 md:w-full mx-auto  -skew-y-1">
    <h2 className="font-extrabold text-4xl my-2">Dominate Games with Perfect Gear</h2>
    <p className="opacity-80">Unlock your potential and push limits with advanced sports equipment designed for excellence in every discipline.</p>
 </div>
        </div>
       </div>
             </SwiperSlide>
      <SwiperSlide><div className="w-full bg-s1 text-white bg-no-repeat rounded-lg  bg-cover h-[600px]">
       <div className="flex justify-evenly flex-col lg:flex-row items-center bg-black bg-opacity-70 rounded-xl w-full h-full text-center"> 
            <div className="lg:w-1/2"><img className="w-full lg:p-16 -translate-y-6 -skew-y-12" src={im2} alt="" /></div>
 <div className="lg:p-8 w-11/12 md:w-full mx-auto skew-y-1">
    <h2 className="font-extrabold text-4xl my-2">Elevate Your Workout Routine Using Premium Fitness Accessories and Toolss</h2>
    <p className="opacity-80">From beginners to professionals, find the best tools to enhance skills and make training sessions more effective.</p>
 </div>
        </div>
       </div></SwiperSlide>
      <SwiperSlide><div className="w-full bg-s3 text-white bg-no-repeat rounded-lg  bg-cover h-[600px]">
       <div className="flex justify-evenly flex-col lg:flex-row items-center bg-black bg-opacity-70 rounded-xl w-full h-full text-center"> 
            <div className="lg:w-1/2"><img className="w-full lg:p-16 -translate-y-6 skew-y-12" src={im3} alt="" /></div>
 <div className="lg:p-8 w-11/12 md:w-full mx-auto  -skew-y-1">
    <h2 className="font-extrabold text-4xl my-2"> Essential Tools for Yoga Enthusiasts</h2>
    <p className="opacity-80">Maximize your fitness routine with tools that support strength, flexibility, and endurance for all exercise levels.</p>
 </div>
        </div>
       </div></SwiperSlide>
      <SwiperSlide><div className="w-full bg-s2 text-white bg-no-repeat rounded-lg  bg-cover h-[600px]">
       <div className="flex justify-evenly flex-col lg:flex-row items-center bg-black bg-opacity-70 rounded-xl w-full h-full text-center"> 
            <div className="lg:w-1/2"><img className="w-full lg:p-16 -translate-y-6 -skew-y-12" src={im4} alt="" /></div>
 <div className="lg:p-8 w-11/12 md:w-full mx-auto  skew-y-1">
    <h2 className="font-extrabold text-4xl my-2">Improve Athletic Skills with Expert-Recommended Gear for Every Sports Enthusiast</h2>
    <p className="opacity-80">Improve dribbling, shooting, and defense with comprehensive training plans designed to boost your on-court performance effectively.</p>
 </div>
        </div>
       </div></SwiperSlide>
    </Swiper>
            </section>
            <section className="my-10">
                <div> <div className="flex justify-center items-center text-center  mt-6 mb-10">
                <div className="md:w-2/3">
                    <h2 className="font-bold text-3xl">Our Products</h2>
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
                <div className="text-center"><Link to="/allsports" className="btn bg-blue-100 text-center my-10 w-1/2 mx-auto" >Show All</Link></div>

            </section>
            <section>
                
            </section>
            <section></section>
        </div>
    );
};

export default Home;