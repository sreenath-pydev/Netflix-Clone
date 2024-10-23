import React from "react";
import "./App.css";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Player from "./Components/PLayer/Player";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;