import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const authContext = createContext();
const AuthProvider = ({ route }) => {
  const [user, setUser] = useState(null);
  //   google provider
  const googleProvider = new GoogleAuthProvider();
  //   register a user
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   sign in a user
  const handleSignIn = (email, password) => {
    return signInWithEmailAndPassword(email, password);
  };
  //   google sign in
  const handleGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign out a user
  const handleLogOut = () => {
    signOut(auth);
  };

  //   observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      return () => {
        unsubscribe();
      };
    });
  }, []);
  const data = {
    user,
    setUser,
    handleRegister,
    handleSignIn,
    handleGoogle,
    handleLogOut,
  };
  return <authContext.Provider value={data}>{route}</authContext.Provider>;
};

export default AuthProvider;
