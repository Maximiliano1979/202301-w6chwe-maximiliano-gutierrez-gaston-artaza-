import { type Request, type Response, type NextFunction } from "express";
import { CustomError } from "../../../CustomError/CustomError.js";
import Robot from "../../../database/models/robotSchema.js";
import { type RobotStructure } from "../../../types.js";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const robots = await Robot.find();
    res.status(200).json({ robots });
  } catch (error) {
    const customError = new CustomError(
      error.message,
      500,
      "Couldn't retrieve robots"
    );
    next(customError);
  }
};

export const getRobotById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params;

  try {
    const robot = await Robot.findById(id);
    res.status(200).json({ robot });
  } catch (error) {
    const customError = new CustomError(
      error.message,
      500,
      "Couldn't retrieve a robot"
    );
    next(customError);
  }
};

export const deleteRobot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params;

  try {
    const robot = await Robot.findByIdAndDelete(id);
    res.status(200).json({ robot });
  } catch (error) {
    const customError = new CustomError(
      error.message,
      500,
      "Couldn't delete the robot "
    );
    next(customError);
  }
};

export const createRobot = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    RobotStructure
  >,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, image, created, speed } = req.body;
    const newRobot = await Robot.create({ name, image, created, speed });
    res.status(201).json({
      newRobot,
    });
  } catch (error) {
    const customError = new CustomError(
      error.message,
      500,
      "Couldn't create a robot"
    );

    next(customError);
  }
};

export const updateRobotName = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    RobotStructure
  >,
  res: Response
) => {
  const id = req.params;
  const { speed, endurance, image, ...dateToChange } = req.body;
  const updatedRobot = await Robot.findByIdAndUpdate(id, dateToChange);
  return res.status(200).json({ updatedRobot });
};
