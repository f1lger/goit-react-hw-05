import { useEffect, useState } from "react";
import MoviesList from "../../components/MovieList/MovieList";
import { searchFilmByTrend } from "../../api";
export default function FilmLisk() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const handleSearchTrend = async () => {
      try {
        const data = await searchFilmByTrend();
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    handleSearchTrend();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
}
