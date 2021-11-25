import { Router } from "express";
import * as WorkoutService from "../services/workout";

const router = Router();

// TODO add functionality to filter workouts by time (week, month, etc.)
// TODO is DATE the correct type?? (also check how the DB stores this...)

router.get('/workout', (req, res) => { 
    res.status(200).send(WorkoutService.getWorkouts());
});

router.get('/:id', (req, res) => {
    if (isNaN(+req.params.id)){
        res.send(`Error. Could not find anything for ${req.params.id}`);
    }
    res.status(200).send(WorkoutService.getById(+req.params.id));
});

export default router;