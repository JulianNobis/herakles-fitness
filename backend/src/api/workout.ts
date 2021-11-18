import { Router } from "express";

const router = Router();

// TODO add functionality to filter workouts by time (week, month, etc.)

router.get('/workout', (req, res) => { 
    res.status(200).send('list of workouts');
});

// id route has to be the last route
router.get('/:id', (req, res) => {
    res.status(200).send(`workout id=${req.params.id}`);
});

export default router