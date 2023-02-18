import mongoose from "mongoose";
import debug from "debug";
const logger = debug("robots:root");

const dataBaseConnection = async (url: string) => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(url);
    logger("Base de datos online");
  } catch (error) {
    logger(error);
  }
};

export default dataBaseConnection;
