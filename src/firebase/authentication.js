import { signOut, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import app from './config';

const auth = getAuth(app);

// Sign-in function
export const login = async (email, password, setAuth) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Update global auth state
        setAuth({ user: userCredential.user });
        return userCredential.user;
    } catch (error) {
        console.error("Error signing in with email and password", error);
        throw error;
    }
};

// Sign-up (register) function
export const signUp = async (email, password, setAuth) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Update global auth state
        setAuth({ user: userCredential.user });
        return userCredential.user;
    } catch (error) {
        console.error("Error signing up with email and password", error);
        throw error;
    }
};


// Logout function
export const logout = async (setAuth) => {
    try {
        await signOut(auth);
        // Update global auth state
        setAuth({ user: null });
    } catch (error) {
        console.error("Error signing out", error);
        throw error;
    }
};


