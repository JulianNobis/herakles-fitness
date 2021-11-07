import { Router } from "express";

const router = Router();
router.use("template", require("./template").default);
router.use("workout", require("./workout").default);
router.use("exercise", require("./exercise").default);

export default router;
