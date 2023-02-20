import morgan from "morgan";
import express from "express";
import cors from "cors";
import robotsRouters from "./server/routers/robots/robotsRouters.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/robots", robotsRouters);

import "./environment.js";
import debug from "debug";
import dataBaseConnection from "./database/config.js";

const logger = debug("robots:root");
const port = process.env.PORT ?? 4000;
const url = process.env.DATA_BASE_CONNECTION;

app.listen(port, () => {
  logger(`Example app listening on port ${port}`);
});
await dataBaseConnection(url!);
