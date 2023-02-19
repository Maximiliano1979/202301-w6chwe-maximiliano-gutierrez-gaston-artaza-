import { type Request, type Response } from "express";
import Robot from "../../database/models/robotSchema.js";
import { type RobotStructure } from "../../types.js";

export const getRobots = async (req: Request, res: Response) => {
  const robot = await Robot.find();
  res.status(200).json({
    robot,
  });
};

export const getRobotById = async (req: Request, res: Response) => {
  const _id = req.params;
  const robot = await Robot.findById(_id);
  res.status(200).json({ robot });
};

export const deleteRobot = async (req: Request, res: Response) => {
  const _id = req.params;
  const robot = await Robot.findByIdAndDelete(_id);
  res.status(200).json({ robot });
};

export const createRobot = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    RobotStructure
  >,
  res: Response
) => {
  const { name, image, created, speed } = req.body;
  const newRobot = await Robot.create({ name, image, created, speed });

  res.status(201).json({
    newRobot,
  });
};

export const updateRobotName = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    RobotStructure
  >,
  res: Response
) => {
  const _id = req.params;
  const { speed, endurance, image, ...dateToChange } = req.body;
  const updatedRobot = await Robot.findByIdAndUpdate(_id, dateToChange);
  return res.status(200).json({ updatedRobot });
};
