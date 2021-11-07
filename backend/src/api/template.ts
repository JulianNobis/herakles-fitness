import { Router } from "express";

const router = Router();
router.get("pull", (req, res) => {
  res.status(200).send("template");
});

router.get("/templates", (req, res) => {
  // TODO: '/templates' or '/template/all'? what is "cleaner" code?? (I think '/template/all')
  res.status(200).send("list of available templates to start a workout");
});

// TODO: should these routes be 'workout/...'?? or 'template/..'?? I think 'template/...' is better!
// TODO: get methods with ID!!!!
router.get(":id", (req, res) => {
  res.status(200).send(`get template with id={req.params.id}`);
});

router.get("fullbody", (req, res) => {
  res.status(200).send("full-body workout");
});

router.get("pull", (req, res) => {
  res.status(200).send("pull");
});

router.get("push", (req, res) => {
  res.status(200).send("push");
});

router.get("legs", (req, res) => {
  res.status(200).send("legs");
});

router.get("upperbody", (req, res) => {
  res.status(200).send("upper-body workout");
});

router.get("lowerbody", (req, res) => {
  res.status(200).send("lower-body workout");
});

export default router;
