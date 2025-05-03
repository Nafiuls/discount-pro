// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWDZVJMKHLiiJs9szO2JKqTHhlmoLDCXQ",
  authDomain: "discount-pro-a354a.firebaseapp.com",
  projectId: "discount-pro-a354a",
  storageBucket: "discount-pro-a354a.firebasestorage.app",
  messagingSenderId: "1004497596241",
  appId: "1:1004497596241:web:e04edb679ddbf2dcde6d70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
