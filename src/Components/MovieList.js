import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import Movie from "./Movie";

export default function MovieList({ movies, setMovies }) {
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [addMovie, setAddMovie] = useState({
        name: " ",
        description: " ",
        url: " ",
        rating: " ",
        id: " ",
    });

    const [isOpen, setOpen] = useState(false);

    const handleNewMovie = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldVal = e.target.value;
        const newData = { ...addMovie };
        newData[fieldName] = fieldVal;
        setAddMovie(newData);
    };
    const addNewMovie = (e) => {
        e.preventDefault();

        const newMovie = {
            id: movies.length + 1,
            name: addMovie.name,
            description: addMovie.description,
            url: addMovie.url,
            link: "https://www.imdb.com/title/tt0111161/",
            rating: addMovie.rating,
        };

        const newMovies = [...movies, newMovie];
        console.log(newMovies);
        setMovies(newMovies);
        setOpen(!isOpen);
    };

    const [filterText, setFilterText] = useState("");
    const [rating, setRating] = useState();

    useEffect(() => {
        console.log("rating: ", rating);
        console.log("filterText: ", filterText);
        let temp;
        if (rating) {
            temp = movies.filter(
                (movie) =>
                    movie.name
                        .toLowerCase()
                        .includes(filterText.toLowerCase()) &&
                    movie.rating <= rating
            );
        } else {
            temp = movies.filter((movie) =>
                movie.name.toLowerCase().includes(filterText.toLowerCase())
            );
            console.log("second clause", temp);
        }

        setFilteredMovies(temp);
    }, [filterText, rating, movies]);

    return (
        <div>
            <div>
                <Button
                    className="mt-2"
                    style={{ backgroundColor: "black" }}
                    onClick={() => setOpen(!isOpen)}
                >
                    Add movie
                </Button>
                <Modal show={isOpen}>
                    <Modal.Header>Add A Movie !</Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={addNewMovie}>
                            <Form.Group>
                                <input
                                    onChange={handleNewMovie}
                                    className="form-control mt-3"
                                    name="name"
                                    type="text"
                                    placeholder="Enter movie name"
                                    required="required"
                                ></input>
                                <input
                                    onChange={handleNewMovie}
                                    className="form-control mt-3"
                                    name="description"
                                    type="text"
                                    placeholder="Enter movie description"
                                    required="required"
                                ></input>
                                <input
                                    onChange={handleNewMovie}
                                    className="form-control mt-3"
                                    name="url"
                                    type="text"
                                    placeholder="Enter movie url"
                                    required="required"
                                ></input>
                                <input
                                    onChange={handleNewMovie}
                                    className="form-control mt-3"
                                    name="rating"
                                    type="text"
                                    placeholder="Enter movie rating"
                                    required="required"
                                ></input>
                            </Form.Group>
                            <Button
                                type="submit"
                                className="btn btn-primary"
                                style={{ float: "right", marginTop: 5 }}
                            >
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setOpen(!isOpen)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="container justify-content-center mt-4">
                <input
                    style={{ width: 400 }}
                    className="form-control"
                    onChange={(e) => setFilterText(e.target.value)}
                    value={filterText}
                    type="text"
                    name="filterText"
                    placeholder="Search by text..."
                ></input>
                <input
                    style={{ width: 400 }}
                    className="form-control"
                    min="0"
                    max="10"
                    onChange={(e) => {
                        console.log(e.target.value);
                        if (e.target.value) {
                            setRating(Number(e.target.value));
                        } else {
                            setRating(e.target.value);
                        }
                    }}
                    value={rating}
                    type="number"
                    placeholder="Search by rating..."
                ></input>
            </div>
            <div className="grid-container">
                {filteredMovies.map((movie) => (
                    <MovieCard
                        name={movie.name}
                        description={movie.description}
                        url={movie.url}
                        id={movie.id}
                        rating={movie.rating}
                        key={movie.id}
                    />
                ))}
            </div>
        </div>
    );
}
