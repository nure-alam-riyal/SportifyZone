
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const AddEquipment = () => {
  const {user}=useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
    const handleData=(e)=>{
        e.preventDefault()
       const  form=e.target 
       const itemName=form.itemName.value;
       const categoryName=form.categoryName.value;
       const image=form.image.value;
       const email=form.email.value;
       const userName=form.userName.value;
       const description=form.description.value;
       const status=form.status.value;
       const price=form.price.value;
       const customization=form.customization.value;
       const rating=form.rating.value;
       const dtime=startDate.toString();
       const info={
        itemName,image,email,categoryName,userName,description,status,price,customization,rating,dtime
       }
      //  console.log(info)
       fetch('http://localhost:4871/equipments',{
        method:"POST",
        headers:{
          'content-type':"application/json"
        },
        body:JSON.stringify(info)
       }).then(res=>res.json()).then(()=>{
        // console.log(data)
        toast.success('Equipment added Successful')
       })
     
    }
    return (
        <div className="hero bg-base-200 py-10">
  <div className="hero-content flex-col ">
    <div className=" text-center">
      <h1 className="text-5xl font-rancho font-bold">Add Equipment</h1>
      <p className="py-6">
      Incorporating additional sports tools, gear, or apparatus to enhance performance, improve training, or cater to specific athletic needs.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl">
      <form onSubmit={handleData} className="card-body space-y-5">
        <div className="lg:flex gap-4">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>
          <input type="text" placeholder="Item Name" name="itemName" className="input input-bordered " required />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Category Name</span>
          </label>
          <input type="text" placeholder="Category Name" name="categoryName" className="input input-bordered" required />
         
        </div>
        </div>
        <div className="lg:flex gap-4">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Image" name="image" className="input input-bordered " required />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
         
        </div>
        </div>
        <div className="lg:flex gap-4 items-center">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text"  name="email" defaultValue={user.email} className="input input-bordered " readOnly />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text"  name="userName" defaultValue={user?.displayName} className="input input-bordered" readOnly />
         
        </div>
        </div>
        <div className="lg:flex gap-4">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating" name="rating" className="input input-bordered " required />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Customization (bat with extra grip, hit paper etc), </span>
          </label>
          <input type="text" placeholder="Customizzation" name="customization" className="input input-bordered" required />
         
        </div>
        </div>
        <div className="lg:flex gap-4">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Stock Status (available product quantity), </span>
          </label>
          <input type="text" placeholder="Stock Status" name="status" className="input input-bordered " required />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Processing Time (delivery time) </span>
          </label>
          <DatePicker className="border w-full p-3 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
         
        </div>
        </div>
        <div className="lg:flex gap-4">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
         <textarea className="border p-6 rounded-sm" placeholder="description..." name="description" id="" cols="5" rows="5"></textarea>
        </div>
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Product</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default AddEquipment;