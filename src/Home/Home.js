import React from 'react'
import Banner from "../Components/Banner/Banner";
import NavBar from "../Components/Navbar/NavBar";
import Rowpost from "../Components/RowPost/Rowpost";
import {Actions, Horror} from '../Components/Urls.js'
import Footer from "../Components/Footer/Footer.js";
export default function Home() {
  return (
    <div>
       <NavBar/>
      <Banner/>
      <Rowpost url={Actions} title="Trending Now" isSmall/>
      <Rowpost url={Horror} title="Horror" isSmall/>
      <Footer/>
    </div>
  )
}
