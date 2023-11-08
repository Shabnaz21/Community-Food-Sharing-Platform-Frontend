import {
    GithubAuthProvider, GoogleAuthProvider,
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword, signInWithPopup, signOut,
}
    from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import useAxios from "../useAxios/useAxios";



export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const axios = useAxios();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    // Google
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser)
                setLoading(true);
                setError(true)
            }).catch(error => {
                console.log(error.message);
            })
    }
    // gitHub
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                setLoading(true);
            })
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logOut = () => {
        return signOut(auth);
    }

    // rest password
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const outsider = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                axios.post('/jwt', loggedUser,
                  )
                    .then(res => {
                        console.log(res.data)
                    })
            }
            else {
                axios.post('/logOut', loggedUser, 
               )
                    .then(res => {
                        console.log(res.data)
                    })
            }
        });
        return () => {
            outsider();
        }
    }, [])
    const authInfo = {

        user,
        createUser,
        loading,
        resetPassword,
        signIn,
        error,
        handleGoogleSignIn,
        handleGithubSignIn,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}
export default AuthProvider;