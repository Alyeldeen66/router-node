import React,{useState} from 'react';
import MovieCard from './MovieCard';
import { Button, Modal,Form } from 'react-bootstrap';
import { staticMovies } from '../staticMovies';
import {Link} from 'react-router-dom';
import {nanoid} from 'nanoid';
import Movie from './Movie';

export default function MovieList(){
    const [movies,setMovies] = useState(staticMovies);
    const [addMovie,setAddMovie] = useState(
        {
            name:" ",
            description:" ",
            url:" ",
            rating:" ",
            id: " "
        }
    );
    const [id_s,setId_s] = useState(5);

    const [val,setVal] = useState(false);
    const handleModal=()=>{
        setVal(!val)
    }

    const handleNewMovie=(e)=>{
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldVal = e.target.value;
        const newData = {...addMovie};
        newData[fieldName] = fieldVal;
        setAddMovie(newData);

    }
    const addNewMovie = (e) =>{
        e.preventDefault();

        const newMovie = {
            id : id_s,
            name:addMovie.name,
            description:addMovie.description,
            url:addMovie.url,
            rating:addMovie.rating,
        };
        
        const newMovies = [...movies,newMovie];
        setMovies(newMovies);
        handleModal();
        setId_s(prevId_s => prevId_s +1)
        
    }

    const [filterText,setFilterText] = useState('');
    const [rating,setRating] = useState('');

    const changeText=(e)=>{
        e.preventDefault();
        setFilterText(e.target.value)
    }

    const changeRating=(e)=>{
        e.preventDefault();
        setRating(e.target.value);
    }
   
    return(
        <div >
            
            <div>
                <Button className="mt-2" style={{backgroundColor:"black"}} onClick={handleModal}>Add movie</Button>
                <Modal show={val}>
                    <Modal.Header>Add A Movie !</Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={addNewMovie}>
                            <Form.Group>    
                            <input onChange={handleNewMovie} className="form-control mt-3" name="name" type="text"  placeholder='Enter movie name' required="required"></input>
                            <input onChange={handleNewMovie} className="form-control mt-3" name="description" type="text"  placeholder='Enter movie description' required="required"></input>
                            <input onChange={handleNewMovie} className="form-control mt-3" name="url" type="text"  placeholder='Enter movie url' required="required"></input>
                            <input onChange={handleNewMovie} className="form-control mt-3" name="rating" type="text"  placeholder='Enter movie rating' required="required"></input>
                            </Form.Group>
                            <Button type="submit" className="btn btn-primary" style={{float:"right",marginTop:5}}>Submit</Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                </div>
                <div className="container justify-content-center mt-4" >
            <input style={{width:400}} className="form-control" onChange={changeText} type="text" name="filterText" placeholder='Search by text...'></input>
            <input style={{width:400}} className="form-control" onChange={changeRating} type="text"  placeholder='Search by rating...'></input>
            </div>
            <div className="grid-container">
            {movies
            .filter(movie=>(
                movie.name.toLowerCase().indexOf(filterText)>=0 && movie.rating.toString().toLowerCase().indexOf(rating)>=0
            ))  
            .map(movie=>(
               
                <MovieCard  name={movie.name} description={movie.description} url={movie.url} id={movie.id} rating={movie.rating}/>
                
                ))
                }
           
            </div>
        </div>
    );
}