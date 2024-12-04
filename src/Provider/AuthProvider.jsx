import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import auth from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
export const AuthContext=createContext('')

const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})
    const createUser=(email,password)=>{
 return  createUserWithEmailAndPassword(auth, email, password)
    }
    const LogInUser=(email,password)=>{
 return  signInWithEmailAndPassword(auth, email, password)
    }
    const UpdateProfile=(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName:name, photoURL: photo
          })
    }
    const LogOut=()=>{
        signOut(auth).then(()=>{
            alert("logout successful")
        })
    }
    useEffect(()=>{
      const subscribe=  onAuthStateChanged(auth, (user) => {
           setUser(user)
          });
        ()=>subscribe()
    },[])
    console.log(user)
 const info={
     createUser,
     LogInUser,
     user,setUser,
     UpdateProfile,
     LogOut
 }
    return (
        <AuthContext.Provider value={info}>
       {
        children
       }
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.any
}
export default AuthProvider;