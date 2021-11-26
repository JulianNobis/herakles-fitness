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

  // TODO: either use "" or ''
  // TODO: send different data (null, exception, ...) if status is NOT 200? (folder api)
  //       also: error/exception handling in .then() or in .catch (the latter probably makes more sense)
  // TODO: create CRUD operations (not just get...) in database/index.ts
  // TODO: maybe split database/index.ts into database/exercise.ts etc...?
  // TODO: which functionalites should the front page have? -> (should NOT be of great concern anyway in the backend)
  //       create homepage service/api/whatever!!
  //       choose from different templates (pull/push/legs, upper/lower, etc.)
  //       later: modify templates (think of a good data structure for database!!)
  //       later: create own templates with own exercise selection
}

startServer();
