import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        logIn, register
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>


};

export default AuthProvider;