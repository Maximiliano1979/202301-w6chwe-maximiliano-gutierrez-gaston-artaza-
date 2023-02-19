import { Router } from "express";
import {
  createRobot,
  deleteRobot,
  getRobotById,
  getRobots,
  updateRobotName,
} from "../../controllers/robots/robotsControllers.js";

// eslint-disable-next-line new-cap
const robotsRouters = Router();

robotsRouters.get("/", getRobots);
robotsRouters.post("/", createRobot);
robotsRouters.delete("/:_id", deleteRobot);
robotsRouters.get("/:_id", getRobotById);
robotsRouters.put("/:_id", updateRobotName);

export default robotsRouters;
