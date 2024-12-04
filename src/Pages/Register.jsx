import { useContext } from "react";
import  { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const {createUser}=useContext(AuthContext)
    const handleregister=e=>{
        e.preventDefault()
        const email=e.target.email.value 
        const password=e.target.password.value
        const name=e.target.name.value
        const photo=e.target.photo.value
        console.log(email,password,name,photo)
        createUser(email,password)
        .then((result)=>{
         console.log(result.user)
        })
        .catch(error=>{
          console.log(error)
        })
    }
    console.log(createUser)
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="flex flex-col w-2/5 mx-auto ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold my-4">Registration Now!</h1>
          </div>
          <div className="card    shrink-0 shadow-2xl">
            <form onSubmit={handleregister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Your Image" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;