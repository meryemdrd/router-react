import React from "react";
import {Rating} from "@material-ui/lab";
import {Card } from "react-bootstrap";


function MovieCard ({movie}){
  return (
   <div>
    <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src= {movie.image} />
  <Card.Body>
     <Card.Title> name :{movie.name} </Card.Title>
    <Card.Title> description :{movie.description} </Card.Title>
    <Card.Title>rating :{movie.rating} </Card.Title>
    <Card.Title> date :{movie.date} </Card.Title>
    <Card.Title> trailer{movie.trailer} </Card.Title>
    
   
  </Card.Body>
</Card>   
<Rating name="read-only" value={movie.rating} readOnly />
          </div> 
       
  
  );
};

export default MovieCard;