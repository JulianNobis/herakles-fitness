import { Router } from "express";

const router = Router();

router.get("/template", (req, res) => {
  res.status(200).send("list of available templates to start a workout");
});

router.get("/fullbody", (req, res) => {
  res.status(200).send("full-body");
});

router.get("/pull", (req, res) => {
  res.status(200).send("pull");
});

router.get("/push", (req, res) => {
  res.status(200).send("push");
});

router.get("/legs", (req, res) => {
  res.status(200).send("legs");
});

router.get("/upperbody", (req, res) => {
  res.status(200).send("upper-body workout");
});

router.get("/lowerbody", (req, res) => {
  res.status(200).send("lower-body workout");
});

// id route has to be the last route
router.get("/:id", (req, res) => {
  res.status(200).send(`get template with id=${req.params.id}`);
});

export default router;
