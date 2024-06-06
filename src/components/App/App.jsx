import "./App.module.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage.jsx";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import MoviesPage from "../../pages/MoviesPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage.jsx";
import MovieReviews from "../MovieReviews/MovieReviews.jsx";
import MovieCast from "../MovieCast/MovieCast.jsx"

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
