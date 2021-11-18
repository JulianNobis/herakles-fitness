import express from "express";
import cors from "cors";

function startServer() {
  const app = express();
  const PORT = 8080;

  app.use(express.json());
  app.use(cors());

  app.use("/", require("./api").default);

  app.listen(PORT, () => console.log(`app is listening on localhost:${PORT}`));

  // TODO: best way to access mongoDB in nodejs (also: where to do this best -> create DB folder probably?)
  // TODO: which functionalites should the front page have? ->
  //       choose from different templates (pull/push/legs, upper/lower, etc.)
  //       later: modify templates (think of a good data structure for database!!)
  //       later: create own templates with own exercise selection
}

startServer();
