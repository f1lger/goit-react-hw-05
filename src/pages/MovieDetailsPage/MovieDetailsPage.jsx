import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { seachFilmById } from "../../api";
import style from "./MovieDetailsPage.module.css";
export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");
  const { movieId } = useParams();
  const [
    {
      poster_path,
      title,
      vote_average,
      overview,
      release_date,
      homepage,
      genres = [],
    },
    setFilmData,
  ] = useState([]);

  useEffect(() => {
    const requestApi = async () => {
      try {
        const data = await seachFilmById(movieId);
        // console.log(data);
        setFilmData(data);
      } catch (error) {
        console.log(error);
      }
    };
    requestApi();
  }, [movieId]);
  return (
    <div className={style.filmCont}>
      <div className={style.detailsCont}>
        <div className={style.imageCont}>
          <Link to={backLinkRef.current}>Go back</Link>
          <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt="" />
        </div>
        <div>
          <h2>{title}</h2>
          <p>
            User score:{" "}
            {vote_average || (
              <span>Sorry, we dont have any ratings for this movie</span>
            )}
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={style.genresList}>
            {genres.map(({ id, name }) => (
              <li className={style.genresItem} key={id}>
                {name}
              </li>
            ))}
          </ul>
          <h3>Release</h3>
          <p>
            {release_date || (
              <span>Sorry we do not have a release date on this film</span>
            )}
          </p>
          {homepage && (
            <a href={homepage} target="_blank" rel="noreferrer">
              Watch the trailer
            </a>
          )}
        </div>
      </div>
      <div className={style.linkCont}>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
