"use client";
import { useState, useEffect, useContext, createContext } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "@/firebase/config";

const GlobalContext = createContext();

const GlobalStateProvider = ({ children }) => {

    const [auth, setAuth] = useState({ user: null, });
    const [screenSize, setScreenSize] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);


    useEffect(() => {
        // Initialize Firebase Auth and subscribe to user state changes
        const authInstance = getAuth(app);
        const unsubscribe = onAuthStateChanged(authInstance, (user) => {
            if (user) {
                // User is signed in, update the auth state
                setAuth({ user });
            } else {
                // User is signed out, reset the auth state
                setAuth({ user: null });
            }
        });

        return () => unsubscribe(); // Unsubscribe on component unmount
    }, []);

    useEffect(() => {
        // Handler to update state whenever the window is resized
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <GlobalContext.Provider value={{
            screenSize,
            auth, setAuth
        }}>
            {children}
            <ToastContainer />
        </GlobalContext.Provider>
    );
};

// custom hook
const useGlobalState = () => useContext(GlobalContext);

export { useGlobalState, GlobalStateProvider };