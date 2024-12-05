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


 const  router=createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch("http://localhost:4871/equipments")
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
                element:<PrivateRoute><AllSportsEquipment></AllSportsEquipment></PrivateRoute>,
                loader:()=>fetch("http://localhost:4871/equipments")
            },{
                path:"details/:id",
                element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                loader:async({params})=>fetch(`http://localhost:4871/equipments/${params.id}`)
                
            },{
                path:'/update/:id',
                element:<PrivateRoute><UpdateData></UpdateData></PrivateRoute>,
                loader:async({params})=>fetch(`http://localhost:4871/equipments/${params.id}`)

            }
        ]

      },
 ])
 export default router

 