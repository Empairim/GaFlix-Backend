import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: String,
  release_date: String,
  poster_path: String,
  vote_average: Number,
  overview: String,
  genres: [{ type: String }],
});

export default mongoose.model("movies", MovieSchema);
