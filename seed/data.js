import db from "../db/connection.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import chalk from "chalk";
import Movie from "../models/Movie.js";
import movies from "./movies.json" assert { type: "json" };

const genreIds = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const scrubbedMovies = movies.map(movie => {
  let genres = movie.genre_ids.map(id => {
    let selectedGenre = "";

    genreIds.forEach(genre => {
      if (genre.id === id) {
        selectedGenre = genre.name;
      }
    });

    return selectedGenre;
  });

  return {
    title: movie.title,
    release_date: movie.release_date,
    poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
    vote_average: movie.vote_average,
    overview: movie.overview,
    genres: genres,
  };
});

const insertData = async () => {
  // Reset Database
  await db.dropDatabase();

  // Insert Data
  await Movie.create(scrubbedMovies);

  console.log(chalk.magenta("Movies created!"));

  const user1 = new User({
    username: "bruno",
    email: "root@super.gmail.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 11),
  });
  await user1.save();

  const user2 = new User({
    username: "bianca",
    email: "b.anca@super.gmail.com",
    password_digest: await bcrypt.hash("!$h0pp3R1", 11),
  });
  await user2.save();

  const user3 = new User({
    username: "enzo",
    email: "n.zo@super.gmail.com",
    password_digest: await bcrypt.hash("!$eller4Lif3", 11),
  });
  await user3.save();

  const user4 = new User({
    username: "kumi",
    email: "kumi@super.gmail.com",
    password_digest: await bcrypt.hash("L0v32!p4int", 11),
  });
  await user4.save();

  // Close DB Connection
  await db.close();
};

insertData();
