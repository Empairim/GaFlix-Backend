import mongoose from "mongoose";
import chalk from "chalk";

// Set up mongoose options
mongoose.set("returnOriginal", false);

// Set up database connection
mongoose
  .connect(process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/gaflix")
  .catch((err) => {
    console.log(`Error connecting to MongoDB: ${err.message}`);
  });

// Event listeners for connection status
mongoose.connection.on("connected", () => {
  console.log(chalk.bold("Connected to MongoDB!"));
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;
