import "./environment.js";
import debug from "debug";
import express from "express";
import robotsRouters from "./routers/robots/robotsRouters.js";
import dataBaseConnection from "./database/config.js";
const app = express();
const logger = debug("robots:root");
const port = process.env.PORT ?? 4000;
const url = process.env.DATA_BASE_CONNECTION;
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use("/robots", robotsRouters);

app.listen(port, () => {
  logger(`Example app listening on port ${port}`);
});
await dataBaseConnection(url!);
