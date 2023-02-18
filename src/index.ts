import debug from "debug";
import express from "express";
import robotsRouters from "./routers/robots/robotsRouters";
const app = express();
const logger = debug("robots:root");
const port = 4000;

app.use("/robots", robotsRouters);

app.listen(port, () => {
  debug(`Example app listening on port ${port}`);
});
