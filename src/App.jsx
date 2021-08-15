import React, { useState } from "react";
import MoviesList from "./components/MoviesList.js";
import { moviesData } from "./components/MoviesData.js";
import Search from "./components/Search.js";
import AddMovie from "./components/AddMovie.js";
import {Route} from 'react-router-dom'
import Description from './components/Description';
import "./App.css";

function App() {
  const [movies, SetMovies] = useState(moviesData);
  const [searchName, setSearchName] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  const AddNewMovie = (addNewMovie) => SetMovies([...movies, addNewMovie]);

return (


<div className="App">
  <Route exact path="/" render={props=>( <>
      <AddMovie AddNewMovie={AddNewMovie} />
      <Search setSearchName={setSearchName} searchRating={searchRating} setSearchRating={setSearchRating} />
      <MoviesList searchName= {searchName}  searchRating={searchRating} movies ={movies} />
      </>)} />
     
     <Route path="/description/:id" render={props=>
      
      { const id = Number(props.match.params.id) 
        const movie = movies.find(movie => movie.id === id)
     return  <Description movie={movie}/>} } />

</div> 
       
  ); 
     }
    

export default App;