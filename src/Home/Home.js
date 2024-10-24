import React from 'react'
import Banner from "../Components/Banner/Banner";
import NavBar from "../Components/Navbar/NavBar";
import Rowpost from "../Components/RowPost/Rowpost";
import {Actions, Horror, Originals, Romance, Documentary } from '../Components/Urls.js'
import Footer from "../Components/Footer/Footer.js";
export default function Home() {
  return (
    <div>
       <NavBar/>
      <Banner/>
      <Rowpost url={Originals} title="NETFLIX ORIGINALS" isSmall/>
      <Rowpost url={Actions} title="ACTIONS" isSmall/>
      <Rowpost url={Horror} title="HORROR" isSmall/>
      <Rowpost url={Romance} title="ROMANCE" isSmall/>
      <Rowpost url={Documentary} title="DOCUMENTARY" isSmall/>
      <Footer/>
    </div>
  )
}
