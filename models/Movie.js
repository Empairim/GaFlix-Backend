import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  backdrop_path: String,
  overview: String,
  genre_ids: [Number],
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
