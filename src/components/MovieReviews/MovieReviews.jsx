import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { seachFilmByReviews } from "../../api";
import style from "./MovieReviews.module.css";
import Loader from "../Loader/Loader";

export default function MovieReviews() {
  const [status, setStatus] = useState("");
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const handleSearchReviews = async () => {
      try {
        setStatus("pending");
        const data = await seachFilmByReviews(movieId);
        setReviews(data.results);
        setStatus(data.results.length > 0 ? "success" : "rejected");
      } catch (error) {
        console.log(error);
      }
    };
    handleSearchReviews();
  }, [movieId]);
  if (status === "pending") return <Loader />;
  if (status === "rejected") return <p>No information about cast was found </p>;
  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id} className={style.review}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
