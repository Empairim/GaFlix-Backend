import Movie from "../models/Movie.js";
import axios from "axios";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
