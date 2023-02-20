import morgan from "morgan";
import express from "express";
import cors from "cors";
import { generalError, notFoundError } from "./middleware/errorMiddlewares";
import robotsRouters from "./routers/robots/robotsRouters";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/robots", robotsRouters);

app.use("/", notFoundError);
app.use("/", generalError);
