import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Themenanging from "../Components/Themenanging";



const MainLayOut = () => {
    return (
        <>
        <Themenanging></Themenanging>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default MainLayOut;