import db from "../db/connection.js";
import fetch from "node-fetch";
import chalk from "chalk";
import HorrorMovie from "../models/HorrorMovie.js";
import ActionMovie from "../models/ActionMovie.js";
import horror from "./horror.json" assert { type: "json" };
import action from "./action.json" assert { type: "json" };

const horrorMovies = horror.map((movie) => ({
  title: movie.title,
  release_date: movie.release_date,
  poster_path: movie.poster_path,
  vote_average: movie.vote_average,
  overview: movie.overview,
}));

const actionMovies = action.map((movie) => ({
  title: movie.title,
  release_date: movie.release_date,
  poster_path: movie.poster_path,
  vote_average: movie.vote_average,
  overview: movie.overview,
}));

const insertData = async () => {
  // Reset Database
  await db.dropDatabase();

  // Insert Data
  await HorrorMovie.create(horrorMovies);
  await ActionMovie.create(actionMovies);

  console.log(chalk.magenta("action and horror movies created!"));

  // Close DB Connection
  await db.close();
};

insertData();
