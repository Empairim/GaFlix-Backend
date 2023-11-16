import db from "./db/connection.js";
import express from "express";
import cors from "cors";
import chalk from "chalk";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

app.use("/api", routes);
//connecting the and then letting you know its on and what port its on
db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connected to MongoDB!"));
  app.listen(PORT, () => {
    console.log(`Express server running in developement on port: ${PORT}`);
  });
});
