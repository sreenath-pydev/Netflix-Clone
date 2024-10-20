import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../Axios";
import { imageUrl, API_KEY } from "../Constants/Constants";
import YouTube from "react-youtube";

export default function RowPost(props) {
  // State variables
  const [movies, setMovies] = useState([]);
  const [videoDetails, setVideoDetails] = useState(null);

  // Fetch movies based on the URL passed as a prop
  const fetchMovies = () => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  };

  // Fetch video trailer details for the selected movie
  const fetchMovieTrailer = (movieId) => {
    console.log(`Fetching trailer for movie ID: ${movieId}`);
    axios
      .get(`movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setVideoDetails(response.data.results[0]);
          console.log("Trailer fetched:", response.data.results[0]);
        } else {
          console.log("Trailer Not Available");
        }
      });
  };

  useEffect(() => {
    fetchMovies(); // Fetch the movies when the component mounts
  }, []); // Empty dependency array ensures this runs only once on mount

  // Options for the YouTube video player
  const youtubePlayerOptions = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      rel: 0,       
      controls: 1,   
      
    },
  };

  return (
    <div className="Row ">
      <h3>{props.title}</h3>
      <div className="rowposters">
        {movies.map((movie) => (
          <img
            onClick={() => fetchMovieTrailer(movie.id)} // Calls the trailer function when clicked
            key={movie.id}
            className={props.isSmall ? "SmallRowImage" : "RowImage"} // Added PascalCase for class names
            src={`${imageUrl + movie.backdrop_path}`} // Movie poster image
            alt={movie.title || movie.name} // Fallback to 'name' if 'title' is undefined
          />
        ))}
      </div>
      {/* Render YouTube video player if there's a video selected */}
      {videoDetails && (
        <YouTube opts={youtubePlayerOptions} videoId={videoDetails.key} />
      )}
    </div>
  );
}
