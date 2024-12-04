import { useLoaderData } from "react-router-dom";
const DetailsPage = () => {
    const equipment=useLoaderData()
    const { itemName,image,email,categoryName,userName,description,status,price,customization,rating,dtime}=equipment || {}
    console.log(equipment)

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
                <div className="flex justify-center">
                    <img
                        src={image}
                        alt={itemName}
                        className="w-32 h-32 object-cover rounded-md"
                    />
                </div>
                <h2 className="text-xl font-bold text-center text-gray-800 mt-4">
                    {itemName}
                </h2>
                <div className="mt-4">
                    <p className="text-gray-600">
                        <strong>User Name:</strong> {userName}
                    </p>
                    <p className="text-gray-600">
                        <strong>Email:</strong> {email}
                    </p>
                    <p className="text-gray-600">
                        <strong>Category:</strong> {categoryName}
                    </p>
                    <p className="text-gray-600">
                        <strong>Description:</strong> {description}
                    </p>
                    <p className="text-gray-600">
                        <strong>Status:</strong> {status}
                    </p>
                    <p className="text-gray-600">
                        <strong>Price:</strong> ${price}
                    </p>
                    <p className="text-gray-600">
                        <strong>Customization:</strong> {customization}
                    </p>
                    <p className="text-gray-600">
                        <strong>Rating:</strong> {rating} ⭐
                    </p>
                    <p className="text-gray-600">
                        <strong>Delivery Time:</strong> {dtime}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;