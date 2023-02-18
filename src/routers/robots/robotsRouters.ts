import { Router } from "express";
import { getRobots } from "../../controllers/robots/robotsControllers.js";

// eslint-disable-next-line new-cap
const robotsRouters = Router();

robotsRouters.get("/", getRobots);

export default robotsRouters;
