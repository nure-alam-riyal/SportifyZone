import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import google from '../assets/google logo.avif'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const [eye, setEye] = useState(true)
  const { LogInUser, SingInWIthgoogle,setLoading}=useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value 
        const password=e.target.password.value
        // console.log(email,password)
        LogInUser(email,password).then(()=>{
          // console.log(result.user)
            setLoading(true)
            if(location?.state){
                       navigate(location.state)
            }
            else
            navigate('/')
          toast.success("Log in successfull")

        }).catch(error=>{
          toast.error(error.message)
        })

    }
   const  handleGoogleLogin=()=>{
    SingInWIthgoogle().then(() => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // navigate('/')
      if(location?.state){
        navigate(location.state)
}
else
navigate('/')
      
      toast.success('Log in with google')
      // The signed-in user info.
      // const user = result.user;
      // console.log(result.user)
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
     
  toast.error(error.message) 
  
      // ...
    });
   }
    console.log(location)
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="flex flex-col w-11/12 md:w-9/12  lg:w-2/5 mx-auto ">
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
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={`${eye?'password':'text'}`} name="password" placeholder="password" className="input input-bordered" required />
                
                <div onClick={()=>setEye(!eye)} className="absolute right-4 top-12">{
             eye?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
                           }</div>{/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              
            </form>
            <div onClick={ handleGoogleLogin} className="flex justify-center  w-11/12 md:w-2/3 lg:w-1/2 mx-auto bg-slate-50 gap-3 my-3 items-center btn">
             <img className="w-10 h-10 rounded-full" src={google} alt="google" /> <p>Login With Google</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;