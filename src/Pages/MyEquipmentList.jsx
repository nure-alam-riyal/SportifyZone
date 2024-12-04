import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MyEquipmentList = () => {
    const {user}=useContext(AuthContext)
    const [myUsers,setMyusers]=useState([])
    useEffect(()=>{
   fetch(`http://localhost:4871/equipments/email/${user.email}`).then(res=>res.json()).then(data=>{
    setMyusers(data)
   })
    },[user.email])
    console.log(myUsers)
    return (
        <div>
            my Equipment list .....
        </div>
    );
};

export default MyEquipmentList;