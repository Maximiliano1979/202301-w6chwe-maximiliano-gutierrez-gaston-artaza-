import mongoose, { Schema } from "mongoose";

const robotSchema = new Schema({
  name: String,
  created: Date,
  image: String,
  speed: Number,
  endurance: Number,
});

const Robot = mongoose.model("Robot", robotSchema);

export default Robot;
