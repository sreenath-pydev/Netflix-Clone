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
  const location = window.location.pathname;
  
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      // Only redirect if user is on the root path or login path
      if (user) {
        // If user is logged in and at login page, redirect to home
        if (location === "/login") {
          navigate("/");
        }
        // Otherwise leave them where they are
      } else {
        // Only redirect to login if not already there
        if (location !== "/login") {
          navigate("/login");
        }
      }
    });
  }, [navigate]);

  return (
    <div className="App">
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;