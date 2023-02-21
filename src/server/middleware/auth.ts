import { type Request, type Response, type NextFunction } from "express";
import { CustomError } from "../../CustomError/CustomError";
import jwt from "jsonwebtoken";
import { type CustomRequest, type CustomJwtPayload } from "./types";

const auth = async (req: CustomRequest, res: Response, next: NextFunction) => {
  if (!req.header("Authorization")) {
    const customError = new CustomError(
      "Missing Authorization header",
      401,
      "Missing token"
    );
    next(customError);
    return;
  }

  if (!req.header("Authorization")?.includes("Bearer")) {
    const customError = new CustomError(
      "Missing Authorization header",
      401,
      "Missing token"
    );

    next(customError);
    return;
  }

  const token = req.header("Authorization")?.replace(/^`Bearer\s*/, "");

  try {
    const { sub: ownerId } = jwt.verify(
      token!,
      process.env.SECRET_WORD!
    ) as CustomJwtPayload;

    req.ownerId = ownerId;
  } catch (error) {
    next(error);
  }

  next();
};

export default auth;
