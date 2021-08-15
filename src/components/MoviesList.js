import React from "react";
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom'
 
 
 function MoviesList ({ movies, searchName, searchRating }) {
 
  return (
    <div style={{ display: "flex",   }}>
    
     { 
       movies
     
    .filter(
         (movie)=> 
        movie.name.toLowerCase().trim().includes(searchName.toLowerCase().trim()) &&
        movie.rating >=searchRating
         )
    .map((movie) => (<Link to={`/description/${movie.id}`}>  
     <MovieCard  movie={movie} key={movie.id} /> </Link> 
     )) }
     
    </div>
  );
};

export default MoviesList;