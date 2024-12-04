import { Link, NavLink } from "react-router-dom";
import logo from '../../public/logo.jpg';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {user, LogOut}=useContext(AuthContext)
    const links=<>
  <li><NavLink to="/"                className=''>Home</NavLink></li>
  <li><NavLink to="/myequipmentlist" className=''>All Sports Equipment</NavLink></li>
  <li><NavLink to="/addequipment"    className=''>Add Sports Equipment</NavLink></li>
  <li><NavLink to="/allsports"       className=''>My Equipment LIst</NavLink></li>
    </>
   
    
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
  <div className="flex gap-3 items-center">
    <div><img className="w-20 h-20 rounded-full" src={logo} alt="logo"/></div>
  <div className="  text-xl">SportifyZone</div>
  </div>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
   {
    user?<div  className="flex gap-3"><div><img title={user.displayName} className="w-12 h-12 rounded-full" src={user.photoURL} alt="userPhoto" /></div  ><Link className="btn bg-red-100" onClick={LogOut}>log Out</Link></div>
     : 
    <div className="flex gap-3">
       <Link to='/login' className="btn">Log in</Link> 
       <Link to='/register' className="btn">Register</Link>
       </div>
   }
  </div>
</div>
    );
};

export default Navbar;