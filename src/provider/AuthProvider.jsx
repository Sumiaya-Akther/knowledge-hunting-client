import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const handleregister = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    };

    const handleLogin = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);

    };


    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };


    const googleLogin = async () => {
        setloading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    };

    const logOut = () => {
        setloading(true);
        return signOut(auth);
    };

    const resetPassword = (email) => {
        setloading(true);
        return sendPasswordResetEmail(auth, email);
    };



    const userInfo = {
        handleregister,
        user,
        setUser,
        handleLogin,
        googleLogin,
        logOut,
        updateUser,
        loading,
        setloading,
        resetPassword

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            //post request for jwt  using user email
            //api end-point: /jwt(poat method)
            if (currentUser) {
                const token = await currentUser.getIdToken();
                //    localStorage.setItem("token", token);
            } else {
                // localStorage.removeItem("token");
            }
            setloading(false);
        });
        return () => {
            unsubscribe();
        }

    }, []);

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
