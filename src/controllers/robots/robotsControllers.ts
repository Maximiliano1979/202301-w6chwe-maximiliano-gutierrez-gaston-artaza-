import { type Request, type Response } from "express";

export const getRobots = (req: Request, res: Response) => {
  res.send("Hello World  robots!");
};
