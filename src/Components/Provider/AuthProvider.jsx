import React, { createContext, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        
    }
    const authInfo = {
        user,
        loading
    }
    return (
        <AuthContext.Provider value={children}></AuthContext.Provider>
    );
};

export default AuthProvider;