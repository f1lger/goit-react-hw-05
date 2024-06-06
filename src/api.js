import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjc3ZDU2NDU4MGNhZDI1ZTBhOGVhN2M0N2Y4YWZlMiIsInN1YiI6IjY2NWEwZjdiYjNiODU5YzRkMTEwOWM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mw4CHfNakW17ZiavLamv-shofTTsOQMWTCXOZqgvEeE",
  },
};

export const searchFilmByTrend = async () => {
  return await axios.get("trending/movie/day", options).then((res) => res.data);
};
export const seachFilmByName = async (query) => {
  return axios
    .get(`search/movie?query=${query}`, options)
    .then((res) => res.data);
};
export const seachFilmById = async (id) => {
  return axios.get(`/movie/${id}`, options).then((res) => res.data);
};
export const seachFilmByCast = async (id) => {
  return axios.get(`/movie/${id}/credits`, options).then((res) => res.data);
};
export const seachFilmByReviews = async (id) => {
  return axios.get(`/movie/${id}/reviews`, options).then((res) => res.data);
};
