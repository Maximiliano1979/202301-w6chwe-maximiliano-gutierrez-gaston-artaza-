/* eslint-disable @typescript-eslint/no-unsafe-return */
import mongoose, { Schema } from "mongoose";

const robotSchema = new Schema({
  name: String,
  created: Date,
  image: String,
  speed: Number,
  endurance: Number,
});

robotSchema.methods.toJSON = function () {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { _id, ...robot } = this.toObject();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  robot.id = _id;
  return robot;
};

const Robot = mongoose.model("Robot", robotSchema);

export default Robot;
