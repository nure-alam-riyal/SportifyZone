import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";




const MainLayOut = () => {
    return (
        <>
       
        <Navbar></Navbar>
      <div className="pt-[80px]">
      <Outlet></Outlet>
      </div>
        <Footer></Footer>
        </>
    );
};

export default MainLayOut;