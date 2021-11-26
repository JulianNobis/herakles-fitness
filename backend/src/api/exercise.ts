import { Router } from "express";
import * as ExerciseService from "../services/exercise";

const router = Router();

router.get('/exercise', (req, res) => { 
    ExerciseService.getExercises().then((data) => {
        res.status(200).send(data);
    });
});

router.get('/deadlift', (req, res) => {
    ExerciseService.getByName('Deadlift').then((data) => {
        res.status(200).send(data);
    });
});

router.get('/benchpress', (req, res) => {
    ExerciseService.getByName('Bench press').then((data) => {
        res.status(200).send(data);
    });
});

router.get('/squat', (req, res) => {
    ExerciseService.getByName('Squat').then((data) => {
        res.status(200).send(data);
    });
});

router.get('/id/:id', (req, res) => {
    ExerciseService.getById(req.params.id).then((data) => {
        res.status(200).send(data);
    });
});

export default router;