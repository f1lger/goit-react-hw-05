import "./App.module.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";

const HomePage = lazy(() => import("../../pages/HomePage.jsx"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage.jsx")
);
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage.jsx"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews.jsx"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast.jsx"));

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
