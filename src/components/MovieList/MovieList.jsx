import { Link, useLocation } from "react-router-dom";
import style from "./MovieList.module.css"
export default function MoviesList({movies}) {
    const location = useLocation();
  return (
    <div>
      <ul className={style.filmList}>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
