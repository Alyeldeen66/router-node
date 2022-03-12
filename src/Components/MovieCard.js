import React,{useState} from 'react';
import '../App.css'
import {Link,useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Movie from './Movie';
const MovieCard=({name,url,description,rating,id})=>{
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(`/movie/${id}`);
    }
    return(
        <div style={{cursor:"pointer"}} onClick={handleClick} className="card movie_card">    
             <img style={{width:351,height:261}} className="card-img-top" src={url} alt="Movie img"></img> 
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="movie-info">{description}</p>
                <span style={{float:"right"}}>
                <i className="fas fa-star float-right"></i> {rating}/10
                </span>
            </div>   
        </div>
        
    );
}   

export default MovieCard;



