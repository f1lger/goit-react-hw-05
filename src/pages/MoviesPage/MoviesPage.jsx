import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { seachFilmByName } from "../../api";
import MoviesList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
export default function MoviesPage() {
  const [status, setStatus] = useState(null);
  const [params, setParams] = useSearchParams();
  const [movie, setMovie] = useState([]);
  const filmParams = params.get("query") ?? "";

  const handleSumbmit = (e) => {
    e.preventDefault();
    const query = e.target.input.value;
    if (query === "") {
      return;
    }
    setParams({ query });
  };
  useEffect(() => {
    if (filmParams === "") {
      return;
    }
    const fetchMovie = async () => {
      setStatus("pending");
      try {
        const data = await seachFilmByName(filmParams);
        setMovie(data.results);
        setStatus(data.results.length > 0 ? "success" : "rejected");
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovie();
  }, [filmParams]);
  return (
    <div>
      <form onSubmit={handleSumbmit}>
        <input type="text" name="input" />
        <button type="submit">Search</button>
      </form>
      {status === "pending" && <Loader />}
      {status === "rejected" && <p>No movies were found </p>}
      {status === "success" && <MoviesList movies={movie} />}
    </div>
  );
}
