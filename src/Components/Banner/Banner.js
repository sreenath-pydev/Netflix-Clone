import React, { useEffect, useState } from 'react'
import { API_KEY } from '../Constants/Constants'
import "./Banner.css"
import axios from '../Axios'
import { imageUrl } from '../Constants/Constants'
export default function Banner() {
  const [Movie, setMovie] = useState()
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const randomIndex = Math.floor(Math.random() * response.data.results.length); // Get a random index
        setMovie(response.data.results[randomIndex]);
        console.log(response.data.results[randomIndex]);  // This should be inside the .then block
      })
      // .catch((error) => {
      //   console.error("Error fetching the data", error);  // Handle errors
      // });
  }, []);  
  // Trim the text to a maximum of 200 characters
  const trimText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };
  
  return (
    <div 
    style={{backgroundImage: `url(${Movie ? imageUrl+Movie.backdrop_path : ""})`}}
    className='banner'>
     
      <div className="content">
        <h1>{Movie ? Movie.original_title || Movie.original_name : ""}</h1>
        <div className="banner-buttons">
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h2 className='banner-description'>{ Movie ? trimText(Movie.overview, 200): ""}</h2>
      </div>
      <div className="fade-bottum"></div>
    </div>
  )
}
