import express from "express";
import cors from "cors";

function startServer() {
  const app = express();
  const PORT = 8080;

  app.use(express.json());
  app.use(cors());

  app.use("/", require("./api").default);

  app.listen(PORT, () => console.log(`app is listening on localhost:${PORT}`));

  // TODO: move to correct folder, refactor code big time!!!
  // TODO: define project structure further (loader, config, jobs, subscribers, etc...)
  //       how should index.js look like in a "clean" project structure?
  // TODO: routing tables? how to do them and think of fitting names for them
  // TODO: best way to access mongoDB in nodejs (also: where to do this best)
  // TODO: define data structure: 'template' even necessary? (I think so, because of cookie-cutter pull/push/legs etc. workouts)
  //       workout(id, name, template, date, duration {think of start- and endtime}, [optional] notes, overview {at the end of the workout a summary?})
  //       template(id, list of exercises, name?)
  //       exercise(id, name, sets, reps, [optional] intensity {easy, light, moderate, hard, all-out OR RPE})
  // TODO: which enpdoints? (workout, template, exercise)
  // TODO: which functionalites should the front page have? ->
  //       choose from different templates (pull/push/legs, upper/lower, etc.)
  //       later: modify templates (think of a good data structure for database!!)
  //       later: create own templates with own exercise selection
  // TODO: res.status(200)... even necessary? what are the best practices for sending the response?
}

startServer();
