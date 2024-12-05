import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../public/logo.jpg';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate=useNavigate()
  const {user, LogOut}=useContext(AuthContext)
    const links=<>
  <li><NavLink to="/"                className='text-lg font-medium'>Home</NavLink></li>
  <li><NavLink to="/allsports"       className='text-lg font-medium'>All Sports Equipment</NavLink></li>
  <li><NavLink to="/addequipment"    className='text-lg font-medium'>Add Sports Equipment</NavLink></li>
  <li><NavLink to="/myequipmentlist" className='text-lg font-medium'>My Equipment List</NavLink></li>
    </>
   const hadleLogout=()=>{
    LogOut().then(() => {
      navigate('/')
      toast.success("logout successful")

  })
   }
    
    return (
        <div className="bg-orange-50 ">
  <div className="navbar w-11/12 mx-auto gap-2 ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
  <div className="flex gap-1 items-center">
    <div><img className="w-16 hidden md:flex h-16 rounded-full" src={logo} alt="logo"/></div>
  <div className="font-bold font-rancho text-xl">SportifyZone</div>
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end ">
   {
    user?<div  className="flex gap-3"><div><img title={user.displayName} className="w-12 h-12 rounded-full" src={user.photoURL} alt="userPhoto" /></div  ><Link className="btn bg-red-100" onClick={hadleLogout}>log Out</Link></div>
     : 
    <div className="flex gap-3">
       <Link to='/login' className="btn">Log in</Link> 
       <Link to='/register' className="btn">Register</Link>
       </div>
   }
  </div>
  </div>
</div>
    );
};

export default Navbar;