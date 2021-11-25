import { Router } from "express";
import * as ExerciseService from "../services/exercise";

const router = Router();

router.get('/exercise', (req, res) => { 
    res.status(200).send(ExerciseService.getExercises());
});

router.get('/deadlift', (req, res) => {
    res.status(200).send(ExerciseService.getByName('deadlift'));
});

router.get('/benchpress', (req, res) => {
    res.status(200).send(ExerciseService.getByName('benchpress'));
});

router.get('/squat', (req, res) => {
    res.status(200).send(ExerciseService.getByName('squat'));
});

router.get('/:id', (req, res) => {
    if (isNaN(+req.params.id)){
         res.send(`Error. Could not find anything for ${req.params.id}`);
    }
    res.status(200).send(ExerciseService.getById(+req.params.id));
});

export default router;