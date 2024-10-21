import React from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/Navbar/NavBar";
import Rowpost from "./Components/RowPost/Rowpost";
import {Actions, Horror} from './Components/Urls.js'
import Footer from "./Components/Footer/Footer.js";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url={Actions} title="Trending Now" isSmall/>
      <Rowpost url={Horror} title="Horror" isSmall/>
      <Footer/>
    </div>
  );
}

export default App;
