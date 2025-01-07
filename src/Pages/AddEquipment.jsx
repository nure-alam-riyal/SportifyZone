
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import {  Slide } from "react-awesome-reveal";

const AddEquipment = () => {
  const {user}=useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
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
       fetch('https://sports-equipments-server-side.vercel.app/equipments',{
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
        <div className="hero  py-10">
  <div className="hero-content flex-col ">
    <div className=" text-center">
      <Slide>
      <h1 className="text-5xl font-rancho font-bold">Add Equipment</h1>
      <p className="py-6">
      Incorporating additional sports tools, gear, or apparatus to enhance performance, improve training, or cater to specific athletic needs.
      </p>
      </Slide>
    </div>
    <div className="card bg-gray-200 w-full text-black max-w-3xl shrink-0 shadow-2xl">
      <form onSubmit={handleData} className="card-body space-y-5">
        <div className="lg:flex gap-4">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text text-black">Item Name</span>
          </label>
          <input type="text" placeholder="Item Name" name="itemName" className="input input-bordered text-gray-200 " required />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text text-black">Category Name</span>
          </label>
          <input type="text" placeholder="Category Name" name="categoryName" className="input text-gray-200  input-bordered" required />
         
        </div>
        </div>
        <div className="lg:flex gap-4">
        <div className="form-control w-full lg:w-1/2">
          <label className="label text-black">
            <span className="label-text text-black">Photo URL</span>
          </label>
          <input type="text" placeholder="Image" name="image" className="input text-gray-200  input-bordered " required />
        </div>
        <div className="form-control w-full  text-black lg:w-1/2">
          <label className="label">
            <span className="label-text text-black">Price</span>
          </label>
          <input type="text" placeholder="Price" name="price" className="input text-gray-200  input-bordered" required />
         
        </div>
        </div>
        <div className="lg:flex gap-4 text-black items-center">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input type="text"  name="email" defaultValue={user.email} className="input text-gray-200  input-bordered " readOnly />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text text-black">User Name</span>
          </label>
          <input type="text"  name="userName" defaultValue={user?.displayName} className="input text-gray-200  input-bordered" readOnly />
         
        </div>
        </div>
        <div className="lg:flex text-black gap-4">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text text-black">Rating</span>
          </label>
          <input type="text" placeholder="Rating" name="rating" className="input text-gray-200  input-bordered " required />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text text-black">Customization (bat with extra grip, hit paper etc), </span>
          </label>
          <input type="text" placeholder="Customizzation" name="customization" className="input text-gray-200  input-bordered" required />
         
        </div>
        </div>
        <div className="lg:flex text-black gap-4">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text text-black">Stock Status (available product quantity), </span>
          </label>
          <input type="text" placeholder="Stock Status" name="status" className="input text-gray-200  input-bordered " required />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text text-black">Processing Time (delivery time) </span>
          </label>
          <DatePicker className="border text-gray-200  w-full p-3 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
         
        </div>
        </div>
        <div className="lg:flex  gap-4">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-black">Description</span>
          </label>
         <textarea className="border p-6 text-gray-200  rounded-sm" placeholder="description..." name="description" id="" cols="5" rows="5"></textarea>
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