import { Link, useLoaderData } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
import { FaBangladeshiTakaSign, FaUsersViewfinder } from "react-icons/fa6";
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
import t1 from '../assets/download (7).jpg'
import t2 from '../assets/images (21).jpg'
import t3 from '../assets/images (22).jpg'
import t4 from '../assets/images (23).jpg'
import i1 from '../assets/download (3).jpg'
import i2 from '../assets/download (4).jpg'
import i3 from '../assets/download (5).jpg'
import i4 from '../assets/download (6).jpg'
import a1 from '../assets/download (62).jpg'
import a2 from '../assets/download (72).jpg'
import a3 from '../assets/images (212).jpg'
import a4 from '../assets/images (222).jpg'
import logo from '../../public/logo.jpg'
import { MdAddChart, MdAddShoppingCart } from "react-icons/md";
import { FaGoodreads, FaSellcast } from "react-icons/fa";


const Home = () => {
    const equipments = useLoaderData()

    // const {   itemName,image,email,categoryName,userName,description,status,price,customization,rating,dtime}=equipments
    return (
        <div className="w-11/12 mx-auto">
            <section>
                <Swiper
                    effect="flip"
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={() => { }}
                    onSlideChange={() => { }}
                >
                    <SwiperSlide >
                        <div className="w-full bg-s4 text-white bg-no-repeat rounded-lg  bg-cover h-[600px]">
                            <div className="flex justify-evenly flex-col lg:flex-row items-center bg-black bg-opacity-70 rounded-xl w-full h-full text-center">
                                <div className="lg:w-1/2"><img className="w-full lg:p-16 -translate-y-6 skew-y-12" src={im1} alt="" /></div>
                                <div className="lg:p-8 w-11/12 md:w-full mx-auto  -skew-y-1">
                                    <h2 className="font-extrabold text-4xl font-rancho my-2">Dominate Games with Perfect Gear</h2>
                                    <p className="opacity-80">Unlock your potential and push limits with advanced sports equipment designed for excellence in every discipline.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="w-full bg-s1 text-white bg-no-repeat rounded-lg  bg-cover h-[600px]">
                        <div className="flex justify-evenly flex-col lg:flex-row items-center bg-black bg-opacity-70 rounded-xl w-full h-full text-center">
                            <div className="lg:w-1/2"><img className="w-full lg:p-16 -translate-y-6 -skew-y-12" src={im2} alt="" /></div>
                            <div className="lg:p-8 w-11/12 md:w-full mx-auto skew-y-1">
                                <h2 className="font-extrabold text-4xl font-rancho my-2">Elevate Your Workout Routine Using Premium Fitness Accessories and Toolss</h2>
                                <p className="opacity-80">From beginners to professionals, find the best tools to enhance skills and make training sessions more effective.</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="w-full bg-s3 text-white bg-no-repeat rounded-lg  bg-cover h-[600px]">
                        <div className="flex justify-evenly flex-col lg:flex-row items-center bg-black bg-opacity-70 rounded-xl w-full h-full text-center">
                            <div className="lg:w-1/2"><img className="w-full lg:p-16 -translate-y-6 skew-y-12" src={im3} alt="" /></div>
                            <div className="lg:p-8 w-11/12 md:w-full mx-auto  -skew-y-1">
                                <h2 className="font-extrabold text-4xl font-rancho my-2"> Essential Tools for Yoga Enthusiasts</h2>
                                <p className="opacity-80">Maximize your fitness routine with tools that support strength, flexibility, and endurance for all exercise levels.</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="w-full bg-s2 text-white bg-no-repeat rounded-lg  bg-cover h-[600px]">
                        <div className="flex justify-evenly flex-col lg:flex-row items-center bg-black bg-opacity-70 rounded-xl w-full h-full text-center">
                            <div className="lg:w-1/2"><img className="w-full lg:p-16 -translate-y-6 -skew-y-12" src={im4} alt="" /></div>
                            <div className="lg:p-8 w-11/12 md:w-full mx-auto  skew-y-1">
                                <h2 className="font-extrabold text-4xl font-rancho my-2">Improve Athletic Skills with Expert-Recommended Gear for Every Sports Enthusiast</h2>
                                <p className="opacity-80">Improve dribbling, shooting, and defense with comprehensive training plans designed to boost your on-court performance effectively.</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
                {/* <select onChange={()=>setTheme()}>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="cupcake">Cupcake</option>
</select> */}


            </section>
            <section className="my-10">
                <div> <div className="flex justify-center items-center text-center  mt-6 mb-10">
                    <div className="md:w-2/3">
                        <h2 className="font-bold font-rancho text-3xl">Our Products</h2>
                        <p>Encompasses a wide range of gear and tools designed for various sports activities, including balls, bats, rackets, protective gear, and training accessories, catering to athletes of all skill levels.</p>
                    </div>
                </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        equipments.slice(0, 6).map(equipemt => <div key={equipemt._id}>
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
            <section className="">
                <div> <div className="flex justify-center items-center text-center  mt-6 mb-10">
                    <div className="md:w-2/3">
                        <h2 className="font-bold font-rancho text-3xl">Sports Categories</h2>
                        <p>Activities based on gameplay, environment, or equipment. Examples include team sports, individual sports, water sports, combat sports, motor sports, adventure sports, and esports, promoting competition and skill.</p>
                    </div>
                </div>
                </div>
                <div className=" md:w-11/12 xl:w-9/12 mx-auto">
                    <div className="lg:flex justify-between my-6">
                        <div className="text-center">
                            <h2 className="font-rancho my-4 text-5xl font-bold">Team Sports</h2>
                            <ul className="text-xl font-semibold lg:list-disc">
                                <li>Cricket</li>
                                <li>Football</li>
                                <li>Basketball</li>
                                <li>Baseball</li>
                                <li>Volleyball</li>
                                <li>More ......</li>
                            </ul>
                        </div>
                        <div className="grid my-8 gap-3 grid-cols-2 rounded-lg">
                            <div className="w-48 h-32"><img className="w-full h-full rounded-xl" src={t1} alt="" /></div>
                            <div className="w-48 h-32"><img className="w-full h-full rounded-xl" src={t2} alt="" /></div>
                            <div className="w-48 h-32"><img className="w-full h-full rounded-xl" src={t3} alt="" /></div>
                            <div className="w-48 h-32"><img className="w-full h-full rounded-xl" src={t4} alt="" /></div>
                        </div>
                    </div>
                    <div className="lg:flex flex-row-reverse justify-between my-6">
                        <div className="text-center">
                            <h2 className="font-rancho my-4 text-5xl font-bold">Individual Sports</h2>
                            <ul className="text-xl font-semibold lg:list-disc">
                                <li>Swimming</li>
                                <li>Track and Field (e.g., running, high jump)</li>
                                <li>Boxing</li>
                                <li>Tennis</li>
                                <li>Gymnastics</li>
                                <li>More ......</li>
                            </ul>
                        </div>
                        <div className="grid my-8 gap-3 grid-cols-2 rounded-lg">
                            <div className="w-48 h-32"><img className="w-full h-full rounded-xl" src={i1} alt="" /></div>
                            <div className="w-48 h-32"><img className="w-full h-full rounded-xl" src={i2} alt="" /></div>
                            <div className="w-48 h-32"><img className="w-full h-full rounded-xl" src={i3} alt="" /></div>
                            <div className="w-48 h-32"><img className="w-full h-full rounded-xl" src={i4} alt="" /></div>
                        </div>
                    </div>
                    <div className="lg:flex justify-between my-6">
                        <div className="text-center">
                            <h2 className="font-rancho my-4 text-5xl  font-bold">Athletics (Track and Field)</h2>
                            <ul className="text-xl font-semibold lg:list-disc">
                                <li>Long-distance running</li>
                                <li>Shot Put</li>
                                <li>High Jump</li>
                                <li>Sprinting</li>
                                <li>Javelin Throw</li>
                                <li>More ......</li>
                            </ul>
                        </div>
                        <div className="grid my-8 gap-3 grid-cols-2 rounded-lg">
                            <div className="w-48 h-32"><img className="w-full h-full rounded-xl" src={a1} alt="" /></div>
                            <div className="w-48 h-32"><img className="w-full h-full rounded-xl" src={a2} alt="" /></div>
                            <div className="w-48 h-32"><img className="w-full h-full rounded-xl" src={a3} alt="" /></div>
                            <div className="w-48 h-32"><img className="w-full h-full rounded-xl" src={a4} alt="" /></div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="my-10">
                <div> <div className="flex justify-center items-center text-center  mt-6 mb-10">
                    <div className="md:w-2/3">
                        <h2 className="font-bold font-rancho text-3xl">Our Monthly story</h2>
                        <p>A curated collection of exclusive deals, trends, and featured products, handpicked to inspire and enhance your shopping experience, refreshed every month just for you.</p>
                    </div>
                </div>
                </div>
                <div className="grid grid-cols-1 space-y-4 lg:space-y-0  md:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
                    <div className="text-center">
                        <div className="text-7xl flex justify-center"><FaUsersViewfinder></FaUsersViewfinder></div>
                        <p className="text-5xl my-3 font-bold"> 100<span className="text-green-400">M+</span> </p>
                        <p className="text-2xl font-semibold">Views</p>
                    </div>
                    <div className="text-center">
                        <div className="text-7xl flex justify-center"><MdAddShoppingCart></MdAddShoppingCart></div>
                        <p className="text-5xl my-3 font-bold"> 10<span className="text-blue-600">K+</span> </p>
                        <p className="text-2xl font-semibold">Add to Carts</p>
                    </div>
                    <div className="text-center">
                        <div className="text-7xl flex justify-center"><FaSellcast></FaSellcast></div>
                        <p className="text-5xl my-3 font-bold"> 3<span className="text-red-700">k+</span> </p>
                        <p className="text-2xl font-semibold">Sells</p>
                    </div>
                    <div className="text-center">
                        <div className="text-7xl flex justify-center"><FaGoodreads></FaGoodreads></div>
                        <p className="text-5xl text-red-400 my-3 font-bold"> 70%(min) </p>
                        <p className="text-2xl font-semibold">Good Reveiw</p>
                    </div>

                </div>
            </section>
            <section className="bg-sce3 bg-cover bg-center my-16 rounded-lg">
                <div> <div className="flex justify-center items-center text-center py-3  mt-6 mb-10">
                    <div className="md:w-2/3 text-center">
                        <div className="flex justify-center my-2"><img className="w-40 h-32 rounded-full" src={logo} alt="" /></div>
                        <p className="text-4xl font-bold font-rancho text-emerald-950">SubScribe to our website</p>
                    </div>
                </div>
                </div>
                <div className="w-11/12 md:w-2/3 lg:w-1/2 pb-10 mx-auto">
                    <div><input className="border w-full p-4 my-2 rounded-lg" type="email" name="" id="" placeholder="Enter your Email" /></div>
                    <div><textarea className="border w-full p-4 rounded-lg" name="" id="" cols="5" placeholder="Your Comments" rows="5"></textarea></div>
                </div>
                <div className="text-center pb-5"><button className="btn bg-blue-400">Subscibe</button></div>

            </section>
        </div>

    );
};

export default Home;