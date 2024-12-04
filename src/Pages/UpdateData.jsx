import { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";


const UpdateData = () => {
    const [startDate, setStartDate] = useState(new Date().toDateString());
    const equipment=useLoaderData()
    const { itemName,image,email,categoryName,userName,description,status,price,customization,rating,dtime,_id}=equipment || {}
    const updateData=(e)=>{
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
        const dtime=startDate;
        const info={
         itemName,image,email,categoryName,userName,description,status,price,customization,rating,dtime
        }
        fetch(`http://localhost:4871/equipments/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(info)


        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className=" text-center">
      <h1 className="text-5xl font-bold">Update  Equipment</h1>
      <p className="py-6">
      Incorporating additional sports tools, gear, or apparatus to enhance performance, improve training, or cater to specific athletic needs.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl">
      <form onSubmit={updateData} className="card-body space-y-5">
        <div className="lg:flex gap-4">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>
          <input type="text" placeholder="Item Name" defaultValue={itemName} name="itemName" className="input input-bordered " required />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Category Name</span>
          </label>
          <input type="text" placeholder="Category Name" defaultValue={categoryName} name="categoryName" className="input input-bordered" required />
         
        </div>
        </div>
        <div className="lg:flex gap-4">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Image" defaultValue={image} name="image" className="input input-bordered " required />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="Price" defaultValue={price} name="price" className="input input-bordered" required />
         
        </div>
        </div>
        <div className="lg:flex gap-4 items-center">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text"  name="email" defaultValue={email} className="input input-bordered " readOnly />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text"  name="userName" defaultValue={userName} className="input input-bordered" readOnly />
         
        </div>
        </div>
        <div className="lg:flex gap-4">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating" name="rating" defaultValue={rating} className="input input-bordered " required />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Customization (bat with extra grip, hit paper etc), </span>
          </label>
          <input type="text" placeholder="Customizzation" defaultValue={customization} name="customization" className="input input-bordered" required />
         
        </div>
        </div>
        <div className="lg:flex gap-4">
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Stock Status (available product quantity), </span>
          </label>
          <input type="text" placeholder="Stock Status" defaultValue={status} name="status" className="input input-bordered " required />
        </div>
        <div className="form-control w-full lg:w-1/2">
          <label className="label">
            <span className="label-text">Processing Time (delivery time) </span>
          </label>
          <DatePicker className="border w-full p-3 rounded-lg" defaultValue={dtime} selected={dtime} onChange={(date) => setStartDate(date)} />
         
        </div>
        </div>
        <div className="lg:flex gap-4">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
         <textarea className="border p-6 rounded-sm" defaultValue={description} placeholder="description..." name="description" id="" cols="5" rows="5"></textarea>
        </div>
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Product</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default UpdateData;