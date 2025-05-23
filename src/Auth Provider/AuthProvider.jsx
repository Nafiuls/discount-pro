import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";
export const authContext = createContext();
const AuthProvider = ({ route }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);
  //   google provider
  const googleProvider = new GoogleAuthProvider();
  //   register a user
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   sign in a user
  const handleSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   google sign in
  const handleGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // update profile
  const manageProfile = async (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        setUser((user) => ({
          ...user,
          displayName: name,
          photoURL: image,
        }));
        toast.success("Profile Updated");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };
  // reset password
  const reset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // sign out a user
  const handleLogOut = () => {
    signOut(auth);
  };

  //   observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setloading(false);
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
    manageProfile,
    reset,
    loading,
  };
  return <authContext.Provider value={data}>{route}</authContext.Provider>;
};

export default AuthProvider;
