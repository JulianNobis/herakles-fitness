import { Router } from "express";

const router = Router();
router.get('', (req, res) => { // TODO create routes
    res.status(200).send('workout');
});

export default router