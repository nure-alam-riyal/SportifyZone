import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import google from '../assets/google logo.avif'

const LogIn = () => {
  const { LogInUser, SingInWIthgoogle}=useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value 
        const password=e.target.password.value
        console.log(email,password)
        LogInUser(email,password).then(result=>{
          console.log(result.user)

        }).catch(error=>{
          console.log(error)
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="flex flex-col w-2/5 mx-auto ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold my-4">Login now!</h1>
          </div>
          <div className="card    shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
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
                <button className="btn btn-primary">Login</button>
              </div>
              
            </form>
            <div onClick={ SingInWIthgoogle} className="flex justify-center w-1/2 mx-auto bg-slate-50 gap-3 my-3 items-center btn">
             <img className="w-10 h-10 rounded-full" src={google} alt="google" /> <p>Login With Google</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;