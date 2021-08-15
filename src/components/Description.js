import React from 'react'
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom'



const Description = ({movie}) => {
    return (
        <div>
            {  movie? <>
                <h1>{movie.name}</h1>
                <ReactPlayer url={movie.trailer}/>
                <p>{movie.description}</p>
                </>:<p> Ops! Not found </p> }

            <Link to="/"> Back to home page </Link>
        </div>
    )
}

export default Description;