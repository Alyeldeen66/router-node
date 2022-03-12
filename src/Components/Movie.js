import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import MovieList from "./MovieList";
import "../App.css";
import { staticMovies } from "../staticMovies";
import { Button } from "react-bootstrap";
export default function Movie({ movies }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({
        name: " ",
        description: " ",
        url: " ",
        rating: " ",
        link: " ",
        id: " ",
    });

    useEffect(() => {
        const tempMovie = movies[id - 1];
        console.log("tempMovie: ", tempMovie);
        setMovie(tempMovie);
    }, []);

    return (
        <div>
            <div className="setPosition">
                <div className="card movie_card">
                    <img
                        style={{ width: 351, height: 261 }}
                        className="card-img-top"
                        src={movie.url}
                        alt="Movie img"
                    ></img>
                    <div className="card-body">
                        <h5 className="card-title">{movie.name}</h5>
                        <p className="movie-info">{movie.description}</p>
                        <span style={{ float: "right" }}>
                            <i className="fas fa-star float-right"></i>{" "}
                            {movie.rating}/10
                        </span>
                    </div>
                </div>

                <div>
                    <Button
                        className="button-position"
                        onClick={() => navigate("/")}
                    >
                        Return to home page
                    </Button>
                </div>
            </div>
            <div className="para-position">
                <h3 style={{ fontFamily: "fantasy" }}>Link to the movie</h3>
            </div>
        </div>
    );
}
