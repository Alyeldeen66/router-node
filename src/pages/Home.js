import App from "../App"
import '../App.css';
import MovieList from "../Components/MovieList";
export default function Home(){
    return(
        <div className="App">
            <MovieList></MovieList>
        </div>
    )
}