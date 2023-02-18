import { type Request, type Response } from "express";
import Robot from "../../database/models/robotSchema.js";
import { type RobotStructure } from "../../types.js";

export const getRobots = async (req: Request, res: Response) => {
  const robots = await Robot.find();
  res.status(200).json({
    robots,
  });
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
