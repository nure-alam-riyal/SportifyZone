import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import auth from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext('')

const AuthProvider = ({ children }) => {
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
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    
    // The signed-in user info.
    // const user = result.user;
    console.log(result.user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
   
console.log(error.message) 

    // ...
  });
    }
    const LogOut = () => {
        signOut(auth).then(() => {
            alert("logout successful")
        })
    }
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
        () => subscribe()
    }, [])
    console.log(user)
    const info = {
        createUser,
        LogInUser,
        user, setUser,
        UpdateProfile,
        LogOut,
        SingInWIthgoogle
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