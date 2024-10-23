import React, { useEffect, useRef, useState } from "react";
import "./RowPost.css";
import axios from "../Axios";
import { imageUrl } from "../Constants/Constants";
import {Link} from "react-router-dom";
export default function RowPost(props) {
  // State variables
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies based on the URL passed as a prop
    axios
      .get(props.url)
      .then((response) => {
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);

  //  Horizontal Scroll on Mouse Wheel
  const cardRef = useRef();
  const handleWheel = (event)=>{
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{
    cardRef.current.addEventListener('wheel', handleWheel)
  },[])
  
  return (
    <div className={props.isFirst ? "FirstRow" : "Row"} >
      <h5>{props.title}</h5>
      <div className="rowposters" ref={cardRef}>
        {movies.map((movie) => (
          <Link to={`/player/${movie.id}`} key={movie.id}> 
          <img className={props.isSmall ? "SmallRowImage" : 
                          props.isFirst ? "FirstRowImage" : "RowImage"} 
            src={`${imageUrl + movie.backdrop_path}`} // Movie poster image
            alt={movie.title || movie.name} // Fallback to 'name' if 'title' is undefined
          />
          </Link>
        ))}
      </div>
    </div>
  );
}
