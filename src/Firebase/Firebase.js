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
  apiKey: "AIzaSyBAaxyrGiaVb64GfF9TCL3Qm2UVIicANXM",
  authDomain: "netflix-clone-21588.firebaseapp.com",
  projectId: "netflix-clone-21588",
  storageBucket: "netflix-clone-21588.appspot.com",
  messagingSenderId: "202564575898",
  appId: "1:202564575898:web:4eb1d62d09ad455e5f7523",
  measurementId: "G-3XQ9HK5D15"
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