import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./LayOut/MainLayOut";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import MyEquipmentList from "./Pages/myEquipmentList";
import AddEquipment from "./Pages/addEquipment";
import AllSportsEquipment from "./Pages/allSportsEquipment";


 const  router=createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },{
                path:'/login',
                element:<LogIn></LogIn>

            },{
                path:'/register',
                element:<Register></Register>
            },{
                path:'/myequipmentlist',
                element:<MyEquipmentList></MyEquipmentList>
            },{
                path:"/addequipment",
                element:<AddEquipment></AddEquipment>
            },{
                path:"/allsports",
                element:<AllSportsEquipment></AllSportsEquipment>
            }
        ]

      },
 ])
 export default router

 