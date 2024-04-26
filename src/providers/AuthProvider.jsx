import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //! create User 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //! Sign in 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updatingProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    //! google login 
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //! Github login 
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubprovider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            setLoading(false);

        });
        return ()=> {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        updatingProfile,
        googleLogin,
        githubLogin,
        setUser,
        loading, 
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.object
};


export default AuthProvider;
