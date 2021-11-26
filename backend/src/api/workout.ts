import { Router } from "express";
import * as WorkoutService from "../services/workout";

const router = Router();

// TODO add functionality to filter workouts by time (week, month, etc.)
// TODO is DATE the correct type?? (also check how the DB stores this...)

router.get('/workout', (req, res) => { 
    WorkoutService.getWorkouts().then((data) => {
        res.status(200).send(data);
    });
});

router.get('/id/:id', (req, res) => {
    WorkoutService.getById(req.params.id).then((data) => {
        res.status(200).send(data);
    });
});

export default router;