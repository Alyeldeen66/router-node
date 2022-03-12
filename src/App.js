import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { staticMovies } from "./staticMovies";
import Movie from "./Components/Movie";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
    const [movies, setMovies] = useState(staticMovies);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Home movies={movies} setMovies={setMovies} />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/movie/:id" element={<Movie movies={movies} />} />
                <Route
                    path="*"
                    element={<Home movies={movies} setMovies={setMovies} />}
                />
            </Routes>
        </Router>
    );
}
