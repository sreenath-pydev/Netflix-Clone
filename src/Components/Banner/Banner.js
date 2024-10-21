import React, { useEffect, useState } from 'react';
import { API_KEY } from '../Constants/Constants';
import './Banner.css';
import axios from '../Axios';
import { imageUrl } from '../Constants/Constants';
import RowPost from '../RowPost/Rowpost';
import { Originals } from '../Urls';
import NLogo from './images/N_logo.png';

export default function Banner() {
  const [Movie, setMovie] = useState(); // State to store the current movie

  useEffect(() => {
    let intervalId;

    // Function to fetch a random movie from the trending list
    const fetchRandomMovie = () => {
      axios
        .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          const randomIndex = Math.floor(Math.random() * response.data.results.length); // Get a random index
          setMovie(response.data.results[randomIndex]); // Set the movie state with the randomly selected movie
          console.log(response.data.results[randomIndex]); // Log the random movie
        })
        .catch((error) => {
          console.error("Error fetching the data", error); // Handle errors
        });
    };

    // Initial fetch of movie data
    fetchRandomMovie();

    // Set up interval to fetch a new random movie every 7000ms (7 seconds)
    intervalId = setInterval(fetchRandomMovie, 7000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  // Function to trim text to a specified maximum length
  const trimText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <div 
      style={{ backgroundImage: `url(${Movie ? imageUrl + Movie.backdrop_path : ""})` }}
      className='banner'
    >
      <div className="content">
        {/* Netflix Series Logo */}
        <img style={{ width: '20px' }} src={NLogo} alt="logo" /> S E R I E S
        {/* Movie Title */}
        <h1>{Movie ? Movie.original_title || Movie.original_name : ""}</h1>
        {/* Top 10 Badge */}
        <img style={{ width: '20px' }} src='https://www.netflix.com/tudum/top10/images/top10.png' /> #1 in TV Shows Today
        {/* Movie Overview Description */}
        <h2 className='banner-description'>
          {Movie ? trimText(Movie.overview, 200) : ""}
        </h2>
        {/* Play and My List Buttons */}
        <div className="banner-buttons">
          <button className='button' style={{ backgroundColor: "#ffffff", color: "#000" }}>
            <i className="fas fa-solid fa-play" style={{ color: "#000" }}></i> Play
          </button>
          <button className='button'>
            <i className="fas fa-solid fa-plus" style={{ color: "#ffffff" }}></i> My List
          </button>
        </div>
      </div>
      {/* Fade effect at the bottom of the banner */}
      <div className="fade-bottum">
        <RowPost url={Originals} title="NETFLIX ORIGINALS" isFirst />
      </div>
    </div>
  );
}
