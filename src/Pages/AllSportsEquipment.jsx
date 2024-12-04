import { Link, useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
    const equipments=useLoaderData()
    // const {   itemName,image,email,categoryName,userName,description,status,price,customization,rating,dtime}=equipments
    console.log(equipments)
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-blue-300">
      <tr >
        <th>NO.</th>
        <th>Item Name</th>
        <th>Category Name</th>
        <th>Price</th>
        <th>Stock Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {equipments?.map((equipment,index)=>
    <tr key={equipment._id}>
        <th>{index+1}</th>
        <td>{equipment?.itemName}</td>
        <td>{equipment?.categoryName}</td>
        <td>{equipment?.price}</td>
        <td>{equipment?.status}</td>
        <td><Link to={`/details/${equipment?._id}`}>View Details</Link></td>
      </tr>
    )}
      
     
    </tbody>
  </table>
</div>
    );
};

export default AllSportsEquipment;