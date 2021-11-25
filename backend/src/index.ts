import express from "express";
import cors from "cors";

function startServer() {
  const app = express();
  const PORT = 8080;

  app.use(express.json());
  app.use(cors());

  app.use("/", require("./api").default);

  app.listen(PORT, () => console.log(`app is listening on localhost:${PORT}`));

  // sudo systemctl status mongod
  // sudo systemctl start mongod
  // sudo systemctl stop mongod
  // TODO: modify routes of /:id to /id/:id!!!
  // TODO: verify that field "id" is a string everywhere!!
  // TODO: which functionalites should the front page have? ->
  //       create homepage service/api/whatever!!
  //       choose from different templates (pull/push/legs, upper/lower, etc.)
  //       later: modify templates (think of a good data structure for database!!)
  //       later: create own templates with own exercise selection
}

startServer();
