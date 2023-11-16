import mongoose from "mongoose";

const actionMovieSchema = new mongoose.Schema({
  title: String,
  release_date: String,
  poster_path: String,
  vote_average: Number,
  overview: String,
  genre_ids: { type: Number, default: 28 }, // same here
});

const ActionMovie = mongoose.model("ActionMovie", actionMovieSchema); // Define ActionMovie variable

export default ActionMovie;
