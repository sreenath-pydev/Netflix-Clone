import { initializeApp } from "firebase/app";
import {  addDoc, collection, getFirestore } from "firebase/firestore";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    getAuth, 
    signOut } from "firebase/auth";
import { toast } from "react-toastify";

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE", // Replace with your actual API key
    authDomain: "YOUR_AUTH_DOMAIN_HERE", // Replace with your actual Auth Domain
    projectId: "YOUR_PROJECT_ID_HERE", // Replace with your actual Project ID
    storageBucket: "YOUR_STORAGE_BUCKET_HERE", // Replace with your actual Storage Bucket
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE", // Replace with your actual Messaging Sender ID
    appId: "YOUR_APP_ID_HERE", // Replace with your actual App ID
    measurementId: "YOUR_MEASUREMENT_ID_HERE" // Replace with your actual Measurement ID
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup
const signup = async (userName, email, password) =>{
    try{
        const respose = await createUserWithEmailAndPassword(auth, email, password);
        const user = respose.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: userName,
            authProvider: "local",
            email: user.email,
        })
    }catch(error){
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

// Login
const login = async (email, password) =>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

// Logout
const logout = () =>{
    signOut(auth);
}

export {auth, signup, login, logout};