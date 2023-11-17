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

export const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);

    if (movie) {
      return res.json(movie);
    }

    res.status(404).json({ message: "Movie not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndUpdate(id, req.body);
    res.status(201).json(movie);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Movie.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Movie Deleted");
    }

    throw new Error("Movie not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
