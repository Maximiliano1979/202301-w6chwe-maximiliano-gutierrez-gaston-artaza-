import { Router } from "express";
import {
  createRobot,
  getRobots,
} from "../../controllers/robots/robotsControllers.js";

// eslint-disable-next-line new-cap
const robotsRouters = Router();

robotsRouters.get("/", getRobots);
robotsRouters.post("/", createRobot);

export default robotsRouters;
