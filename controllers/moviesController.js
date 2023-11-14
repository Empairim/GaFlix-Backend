import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Function to fetch movies by genre ID
async function fetchMoviesByGenre(genreId) {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`;
  const response = await fetch(url);
  const data = await response.json();
  const movies = data.results.map((movie) => ({
    title: movie.title,
    release_date: movie.release_date,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
    overview: movie.overview,
  }));
  return movies;
}

// Example usage to fetch horror movies
const horrorMovies = await fetchMoviesByGenre(27);

// Example usage to fetch action movies
const actionMovies = await fetchMoviesByGenre(28);
