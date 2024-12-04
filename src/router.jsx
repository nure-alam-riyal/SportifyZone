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
                element:<MyEquipmentList></MyEquipmentList>
            },{
                path:"/addequipment",
                element:<AddEquipment></AddEquipment>
            },{
                path:"/allsports",
                element:<AllSportsEquipment></AllSportsEquipment>,
                loader:()=>fetch("http://localhost:4871/equipments")
            },{
                path:"details/:id",
                element:<DetailsPage></DetailsPage>,
                loader:async({params})=>fetch(`http://localhost:4871/equipments/${params.id}`)
                
            },{
                path:'/update/:id',
                element:<UpdateData></UpdateData>,
                loader:async({params})=>fetch(`http://localhost:4871/equipments/${params.id}`)

            }
        ]

      },
 ])
 export default router

 