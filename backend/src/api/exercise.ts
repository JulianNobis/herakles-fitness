import { Router } from "express";
import * as ExerciseService from "../services/exercise";

const router = Router();

router.get('/exercise', (req, res) => { 
    ExerciseService.getExercises().then((val) => {
        res.status(200).send(val);
    });
});

router.get('/deadlift', (req, res) => {
    ExerciseService.getByName('Deadlift').then((val) => {
        res.status(200).send(val);
    });
});

router.get('/benchpress', (req, res) => {
    ExerciseService.getByName('Bench press').then((val) => {
        res.status(200).send(val);
    });
});

router.get('/squat', (req, res) => {
    ExerciseService.getByName('Squat').then((val) => {
        res.status(200).send(val);
    });
});

router.get('/:id', (req, res) => {
    ExerciseService.getById(req.params.id).then((val) => {
        res.status(200).send(val);
    });
});

export default router;