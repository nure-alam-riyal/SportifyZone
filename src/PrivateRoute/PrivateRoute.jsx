import { useContext } from "react";
import PropTypes from 'prop-types'
import { AuthContext } from "../Provider/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import { Navigation } from "swiper/modules";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location=useLocation()
    // const navigate=useNavigate()
    const {user,loading}=useContext(AuthContext)
    console.log(location)
    if(loading)
        return(
    <div>
<span className="loading text-blue-500  loading-bars loading-xs"></span>
<span className="loading text-red-500 loading-bars loading-sm"></span>
<span className="loading text-yellow-500 loading-bars loading-md"></span>
<span className="loading text-green-500 loading-bars loading-lg"></span>
    </div>
    
        )
    if(user)
        return  children
   else
    return (
<div>
{
    <Navigate state={location} to="/login"></Navigate>
}
</div>
        
    );
};
PrivateRoute.propTypes={

    children:PropTypes.any
}
export default PrivateRoute;