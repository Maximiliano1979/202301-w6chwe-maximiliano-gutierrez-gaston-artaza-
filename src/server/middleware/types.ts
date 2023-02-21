import { type Request } from "express";
import { type JwtPayload } from "jsonwebtoken";

export interface CustomJwtPayload extends JwtPayload {
  sub: string;
}

export interface CustomRequest extends Request {
  ownerId: string;
}
