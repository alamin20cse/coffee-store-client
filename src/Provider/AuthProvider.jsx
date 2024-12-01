import React, { createContext, useState } from 'react';
import { auth } from '../assets/firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContex=createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const  [loading,setLoaing]=useState(true);

    const createUser=(email,password)=>{
        setLoaing(true);

        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>
    {
        setLoaing(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    







    const userInfo={
        user,
        loading,
        createUser,
        signInUser,


    }



    return (
        <AuthContex.Provider value={userInfo}>
            {children}
            
        </AuthContex.Provider>
    );
};

export default AuthProvider;