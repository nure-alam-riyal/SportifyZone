import { useLoaderData } from "react-router-dom";
const DetailsPage = () => {
    const equipment=useLoaderData()
    const { itemName,image,categoryName,description,status,price,customization,rating,dtime}=equipment || {}
   

    return (
        <div className="max-w-lg my-10 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="">
                <div className="flex justify-center">
                    <img
                        src={image}
                        alt={itemName}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <h2 className="text-xl font-bold text-center text-gray-800 mt-4">
                <strong>Item Name:</strong> {itemName}
                </h2>
                <h2 className="text-xl font-bold text-center text-gray-800 mt-4">
                <strong>Category Name :</strong> {categoryName}
                </h2>
                <div className="mt-4">
                    <div className="flex px-10 justify-between">
                    <p className="text-gray-600">
                        <strong>Price:</strong> ${price}
                    </p>
                    <p className="text-gray-600">
                        <strong>Stock Status:</strong> {status}
                    </p>
                    </div>
                    <div className="flex px-10 justify-between">
                    <p className="text-gray-600">
                        <strong>Delivery Time:</strong> {dtime}
                    </p>
                    <p className="text-gray-600">
                        <strong>Rating:</strong> {rating} 
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
            </div>
        </div>
    );
};

export default DetailsPage;