import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../public/logo.jpg';
import { useContext } from "react";
// import ReactTooltip from 'react-tooltip';
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import Themenanging from "./Themenanging";
// import { Tooltip } from "react-tooltip";




const Navbar = () => {
  const navigate = useNavigate()
  const { user, LogOut } = useContext(AuthContext)
 
  const hadleLogout = () => {
    LogOut().then(() => {
      navigate('/')
      toast.success("logout successful")

    })
  }

  return (
    <div className=" flex justify-center ">
      <div className="flex bg-gray-400 fixed z-10 w-full bg-opacity-80 backdrop-blur-lg  justify-center">
        <div className="navbar w-11/12  mx-auto  gap-2 ">
          <div className="navbar-start ">
            {/* <div className="dropdown">
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
        tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {links}
      </ul>
    </div> */}
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
                <li><NavLink to="/" className='                hover:text-red-300 text-lg font-medium'>Home</NavLink></li>
                <li><NavLink to="/allsports" className='       hover:text-red-300 text-lg font-medium'>All Equipment</NavLink></li>
                <li><NavLink to="/addequipment" className='    hover:text-red-300 text-lg font-medium'>{user ?'Add Equipment':''}</NavLink></li>
                <li><NavLink to="/myequipmentlist" className=' hover:text-red-300 text-lg font-medium'>{user ?'My Equipment':''}</NavLink></li>
                <li><NavLink to="/contactus" className='       hover:text-red-300 text-lg font-medium'>Contact</NavLink></li>
                <li><NavLink to="/aboutus" className='       hover:text-red-300 text-lg font-medium'>About</NavLink></li>
                <li><NavLink to="/login" className='           hover:text-red-300 text-lg font-medium'>{!user&&'Login'}</NavLink></li>
               
              
              </ul>
            </div>
            <div className="flex gap-1 items-center">
              <div><img className="w-16 hidden md:flex h-16 rounded-full" src={logo} alt="logo" /></div>
              <div className="font-bold font-rancho text-xl">SportifyZone</div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex flex-wrap">
            <ul className="menu menu-horizontal px-1">
              
                <li><NavLink to="/" className='                                                  hover:text-red-300 font-medium'>Home</NavLink></li>
                <li><NavLink to="/allsports" className='                                         hover:text-red-300 font-medium'>All Equipment</NavLink></li>
                <li className={`${user?'':'hidden'}`}><NavLink to="/addequipment" className='    hover:text-red-300 font-medium'>{user ?'Add Equipment':''}</NavLink></li>
                <li className={`${user?'':'hidden'}`}><NavLink to="/myequipmentlist" className=' hover:text-red-300 font-medium'>{user ?'My Equipment':''}</NavLink></li>
                <li><NavLink to="/contactus" className='                                         hover:text-red-300 font-medium'>Contact</NavLink></li>
                <li><NavLink to="/aboutus" className='                                           hover:text-red-300 font-medium'>About</NavLink></li>
                <li className={`${user?'hidden':'flex'}`}><NavLink to="/login" className='       hover:text-red-300 font-medium'>{!user&&'Login'}</NavLink></li>
            </ul>
          </div>
          <div className="navbar-end ">
            {
              user ?
                <div className="flex gap-3">

                  <div id='riyal' ><img

                     
                    data-tooltip-id="riyal"
                    data-tooltip-content={user.displayName}
                    data-tooltip-place="right"
                    data-tooltip-variant="info"

                    className="w-12 h-12 z-50 rounded-full" src={user.photoURL} alt="userPhoto" />
                  </div  >
                  {/* <Tooltip id="riyal" anchorSelect=".my-anchor-element" place="top">
  You can't click me :
</Tooltip> */}

                  <Link className="btn bg-red-100" onClick={hadleLogout}>log Out</Link></div>
                :
                <div className="flex gap-3">
                   <Link to="/login" className='text-lg btn font-medium lg:hidden'>{user?'':'Login'}</Link>
                  <Link to='/register' className="btn hidden lg:flex">Register</Link>
                </div>
            }
            <div className="p-3 rounded-full"><Themenanging></Themenanging></div>
          </div>
        </div>
      </div>
      <Tooltip
        id="riyal"
        className="z-50"
      // anchorSelect=".my-anchor-element" place="top"
      >

      </Tooltip>
    </div>
  );
};

export default Navbar;