import express from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();
const port = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(chalk.green(`Server is running on port ${port}`));
});
