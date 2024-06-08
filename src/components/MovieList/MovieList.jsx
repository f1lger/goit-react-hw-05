import { Link, useLocation } from "react-router-dom";
import style from "./MovieList.module.css"
export default function MoviesList({movies}) {
    const location = useLocation();
  return (
    <div>
      <ul className={style.filmList}>
        {movies.map(({ id, title, poster_path }) => {
          if (!poster_path) {
            return;
          }
          return (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={location}
                className={style.movieCont}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt=""
                />
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
