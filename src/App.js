import React, { useEffect } from "react";
import "./App.css";
import Home from "./Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login/Login";
import Player from "./Components/PLayer/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate = useNavigate();
  useEffect (() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/");
        //console.log('logged in')
    }else{
        navigate("/login");
        //console.log('Logged out')
    }
    });
  }, []);

  return (
    <div className="App">
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;