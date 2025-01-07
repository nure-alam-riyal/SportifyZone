import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./LayOut/MainLayOut";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import MyEquipmentList from "./Pages/myEquipmentList";
import AddEquipment from "./Pages/addEquipment";
import AllSportsEquipment from "./Pages/allSportsEquipment";
import DetailsPage from "./Pages/DetailsPage";
import UpdateData from "./Pages/UpdateData";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "./Pages/ErrorPage";
import ContactUs from "./Pages/ContactuUs";
import AboutUs from "./Pages/AboutUs";


 const  router=createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch("https://sports-equipments-server-side.vercel.app/equipments")
            },{
                path:'/login',
                element:<LogIn></LogIn>

            },{
                path:'/register',
                element:<Register></Register>
            },{
                path:'/myequipmentlist',
                element:<PrivateRoute><MyEquipmentList></MyEquipmentList></PrivateRoute>,
            },{
                path:"/addequipment",
                element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>,
            },{
                path:"/allsports",
                element:<AllSportsEquipment></AllSportsEquipment>,
                loader:()=>fetch("https://sports-equipments-server-side.vercel.app/equipments")
            },{
                path:"details/:id",
                element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                loader:async({params})=>fetch(`https://sports-equipments-server-side.vercel.app/equipments/${params.id}`)
                
            },{
                path:'/update/:id',
                element:<PrivateRoute><UpdateData></UpdateData></PrivateRoute>,
                loader:async({params})=>fetch(`https://sports-equipments-server-side.vercel.app/equipments/${params.id}`)

            },{
                path:'contactus',
                element:<ContactUs></ContactUs>
        },
        {
            path:'/aboutus',
            element:<AboutUs></AboutUs>
        }
        ]

      },
 ])
 export default router

 