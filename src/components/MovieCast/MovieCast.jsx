import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { seachFilmByCast } from "../../api";
import style from "./MovieCast.module.css";
import Loader from "../Loader/Loader.jsx";
// import { useParams } from "react-router-dom";

export default function MovieCast() {
  const [status, setStatus] = useState("");
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const handleSearchCast = async () => {
      try {
        setStatus("pending");
        const data = await seachFilmByCast(movieId);
        setCastInfo(data.cast);
        setStatus(data.cast.length > 0 ? "success" : "rejected");
      } catch (error) {
        console.log();
      }
    };
    handleSearchCast();
  }, [movieId]);
  if (status === "pending") return <Loader />;
  if (status === "rejected") return <p>No information about cast was found </p>;

  return (
    <div>
      <ul className={style.castCont}>
        {castInfo.map(({ name, character, profile_path, id }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
