import HorrorMovie from "../models/HorrorMovie.js";
import ActionMovie from "../models/ActionMovie.js";
import axios from "axios";

// Get a horror movie by ID pretty much gets all the horror movies
export const getAllHorror = async (req, res) => {
  try {
    const horrorMovies = await HorrorMovie.find({ genre_ids: 27 });
    res.json(horrorMovies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getAllAction = async (req, res) => {
  try {
    const actionMovies = await ActionMovie.find({ genre_ids: 28 });
    res.json(actionMovies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
