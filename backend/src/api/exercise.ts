import { Router } from "express";

const router = Router();
router.get('/exercise', (req, res) => { 
    res.status(200).send('list of all exercises');
});

router.get('/deadlift', (req, res) => {
    res.status(200).send('exercise: deadlift');
});

router.get('/bench-press', (req, res) => {
    res.status(200).send('exercise: bench press');
});

router.get('/squat', (req, res) => {
    res.status(200).send('exercise: squat');
});

// id route has to be the last route
router.get('/:id', (req, res) => {
    res.status(200).send(`exercise with id=${req.params.id}`);
});

export default router