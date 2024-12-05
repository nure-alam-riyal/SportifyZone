import { useContext, useState } from "react";
import  { AuthContext } from "../Provider/AuthProvider";
import google from '../assets/google logo.avif'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [eye, setEye] = useState(true)
  const navigate=useNavigate()
  const {createUser,UpdateProfile,SingInWIthgoogle,setLoading}=useContext(AuthContext)
    const handleregister=e=>{
        e.preventDefault()
        const email=e.target.email.value 
        const password=e.target.password.value
        const name=e.target.name.value
        const photo=e.target.photo.value
        const passA = /(?=.*[A-Z])/
        const passa = /(?=.*[a-z])/
        const pass6 = /.{6,}/
        if (!passA.test(password)) {
           toast.error('Password need one UpperCase Later')
          return
        }
        else if (!passa.test(password)) {
           toast.error('Password need one LowerCase Later')
          return
        }
        else if (!pass6.test(password)) {
          toast.error('Password need at least 6  character')
          return
        }
        else {
          createUser(email,password)
          .then(()=>{
            setLoading(true)
          //  console.log(result.user)
           UpdateProfile(name,photo).then(()=>{
            setLoading(true)
            navigate('/')

            toast.success('registration in successfull')
           })
           .catch(error=>{
            toast.error(error.message)
           })
          })
          .catch(error=>{
            toast(error.message)
          })
        }
        // console.log(email,password,name,photo)
       
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
    // console.log(createUser)
    return (
        <div className="hero bg-base-200 min-h-screen py-5">
        <div className="flex flex-col w-11/12 md:w-9/12  lg:w-2/5 mx-auto ">
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
                <button className="btn btn-primary">Registration</button>
              </div>
              
            </form>
            <div onClick={  handleGoogleLogin} className="flex justify-center w-11/12 md:w-2/3 lg:w-1/2 mx-auto bg-slate-50 gap-3 my-3 items-center btn">
             <img className="w-10 h-10 rounded-full" src={google} alt="google" /> <p>Login With Google</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;