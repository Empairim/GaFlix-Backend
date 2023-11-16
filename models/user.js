import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: { type: String, required: true },
    password_digest: {
      type: String,
      required: true,
      select: false,
      unique: true,
    },
  },
  { timestamps: true }
);

User.plugin(uniqueValidator);

export default mongoose.model("users", User);
