import mongoose from "mongoose";

const horrorMovieSchema = new mongoose.Schema({
  title: String,
  release_date: String,
  poster_path: String,
  vote_average: Number,
  overview: String,
  genre_ids: { type: Number, default: 27 }, // Hard code the genre ID for horror movies
});

const HorrorMovie = mongoose.model("HorrorMovie", horrorMovieSchema); // Define ActionMovie variable

export default HorrorMovie;
