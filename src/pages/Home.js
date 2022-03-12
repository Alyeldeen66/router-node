import "../App.css";
import MovieList from "../Components/MovieList";
export default function Home({ movies, setMovies }) {
    return (
        <div className="App">
            <MovieList movies={movies} setMovies={setMovies} />
        </div>
    );
}
