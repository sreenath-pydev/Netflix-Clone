import React, { useEffect, useState } from 'react';
import './player.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "../Axios";
import { API_KEY } from "../Constants/Constants";
import YouTube from "react-youtube";

export default function Player() {
  const { id } = useParams(); // Movie ID from the route
  const navigate = useNavigate(); // To handle back navigation
  const [videoDetails, setVideoDetails] = useState(null); // State to hold video details

  // Fetch the trailer for the movie based on the ID
  useEffect(() => {
    // Fetch movie videos from TMDb API
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setVideoDetails(response.data.results[0]); // Set video details (YouTube key)
          console.log("Trailer fetched:", response.data.results[0]);
        } else {
          console.log("Trailer Not Available");
        }
      })
      .catch((error) => {
        alert("Trailer Not Available");
        console.error("Error fetching video data:", error);
      });
  }, []);

  // YouTube Player options for full screen
  const youtubePlayerOptions = {
    height: "100%",  
    width: "100%",   
    playerVars: {
      autoplay: 1,
      mute: 0,
      rel: 0,       
      controls: 1,  
    },
  };

  return (
    <div className='player'>
      {/* Back button to navigate back to the previous page */}
      <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>
      
      {/* Render YouTube video player if there's a video available */}
      <div className="video-container">
        {videoDetails ? (
          <YouTube opts={youtubePlayerOptions} videoId={videoDetails.key} />
        ) : (
          <p>Trailer Not Available</p>
        )}
      </div>

      {/* Movie Info (optional) */}
      {videoDetails && (
        <div className="player-info">
          <p><strong>{videoDetails.name}</strong> </p>
          <p><strong>{videoDetails.type}</strong> </p>
          <p><strong> {videoDetails.size}</strong></p>
        </div>
      )}
    </div>
  );
}