import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import auth from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext('')


const AuthProvider = ({ children }) => {
   
    // const navigate=useNavigate()
    const [loading,setLoading]=useState(true)
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LogInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const UpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const SingInWIthgoogle=()=>{
      return  signInWithPopup(auth, provider)
    }
    const LogOut = () => {
        signOut(auth).then(() => {
            toast.success("logout successful")

        })
    }
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false)
            setUser(user)
        });
        () => subscribe()
    }, [])
    // console.log(user)
    const info = {
        createUser,
        LogInUser,
        user, setUser,
        UpdateProfile,
        LogOut,
        SingInWIthgoogle,
        loading,setLoading,
       
    }
    return (
        <AuthContext.Provider value={info}>
            {
                children
            }
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.any
}
export default AuthProvider;