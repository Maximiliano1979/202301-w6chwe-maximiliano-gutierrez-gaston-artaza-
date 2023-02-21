import { Router } from "express";
import {
  createRobot,
  deleteRobot,
  getRobotById,
  getRobots,
  updateRobotName,
} from "../../controllers/robots/robotsControllers.js";
import auth from "../../middleware/auth.js";

const robotsRouters = Router();

robotsRouters.get("/", getRobots);
robotsRouters.post("/", createRobot);
robotsRouters.delete("/:id", auth, deleteRobot);
robotsRouters.get("/:_id", getRobotById);
robotsRouters.put("/:_id", updateRobotName);

export default robotsRouters;
