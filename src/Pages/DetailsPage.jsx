import {  Slide } from "react-awesome-reveal";

import { useLoaderData } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const DetailsPage = () => {
    const equipment=useLoaderData()
    const { itemName,image,categoryName,description,status,price,customization,rating,dtime}=equipment || {}
   

    return (
        <div className="w-10/12 my-10 mx-auto  bg-gray-200 rounded-lg shadow-md overflow-hidden">
            <Slide><div className="lg:flex items-center">
                <div className="flex h-[400px] justify-center">
                    <img
                        src={image}
                        alt={itemName}
                        className="w-full h-full p-10   rounded-md"
                    />
                </div>
               
                <div className="mt-4">
                <h2 className="text-xl font-bold px-10  text-gray-800 mt-4">
                <strong></strong> {itemName}
                </h2>
                <h2 className="text-xl font-bold px-10  font-rancho text-gray-800 mt-4">
                <strong></strong> {categoryName}
                </h2>
                    <div className="flex px-10 justify-between">
                    <p className="text-gray-600">
                        <strong></strong> ${price}
                    </p>
                  
                    <p className="text-gray-600">
                        <strong>Stock:</strong> {status}
                    </p>
                    <p className="text-gray-600 ">
                    <p>({rating}) </p>
                        <Rating className="flex"  readonly initialValue={rating} size={20}></Rating> 
                    </p>
                    </div>
                    <div className="flex px-10 justify-between">
                    <p className="text-gray-600">
                        <strong>Delivery Time:</strong> {dtime}
                    </p>
                   
                    </div>
                    <p className="text-gray-600 px-10">
                        <strong>Customization:</strong> {customization}
                    </p>
                    <hr className="my-4" />
                    <p className="text-gray-600 my-6 px-10">
                        {/* <strong>Description:</strong> */}
                         {description}
                    </p>
                    
                    
                   
                   
                    
                </div>
            </div></Slide>
        </div>
    );
};

export default DetailsPage;