import { createContext } from "react";
import PropTypes from 'prop-types'
import auth from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext=createContext('')

const AuthProvider = ({children}) => {
    const createUser=(email,password)=>{
 return  createUserWithEmailAndPassword(auth, email, password)
    }
    const LogInUser=(email,password)=>{
 return  signInWithEmailAndPassword(auth, email, password)
    }
 const info={
     createUser,
     LogInUser
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