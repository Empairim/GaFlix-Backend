import mongoose from "mongoose";
import chalk from "chalk";
//so when we update something it returns the new object instead of old one
mongoose.set("returnOriginal", false);
//set ups db with local host and after slash is the db name with
mongoose.connect("mongodb://127.0.0.1:27017/gaflix").catch((err) => {
  console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("connected", () => {
  console.log(chalk.bold("connected to MongoDB!"));
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;
