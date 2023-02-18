import { Router } from "express";
import {
  createRobot,
  deleteRobot,
  getRobotById,
  getRobots,
} from "../../controllers/robots/robotsControllers.js";

// eslint-disable-next-line new-cap
const robotsRouters = Router();

robotsRouters.get("/", getRobots);
robotsRouters.post("/", createRobot);
robotsRouters.delete("/:_id", deleteRobot);
robotsRouters.get("/:_id", getRobotById);

export default robotsRouters;
