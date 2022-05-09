/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import express from 'express';
import cors from 'cors';

import { calculateBmi } from './bmiCalculator';
import { calculator } from './calculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => {
    res.send('pong');
});

app.get("/bmi", (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    const bmi: string = calculateBmi(height, weight);

    if (!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
        res.send({ error: "malformatted parameters" }).status(400);
    } else {
        res.send({
            height: height,
            weight: weight,
            bmi: bmi
        });
    }
});

app.get("/calculate", (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { value1, value2, op } = req.query;
    if (!value1 || isNaN(Number(value1))) {
        return res.send({ error: "malformatted parameters" }).status(400);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = calculator(Number(value1), Number(value2), String(op));

    return res.send({ "result": result });
});

app.post("/exercises", (req, res) => {

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { daily_exercises, target } = req.body;

    if (!daily_exercises || !target) {
        res.send({
            error: "parameters missing"
        }).status(400);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const daily_exercises_is_numeric = daily_exercises.some(isNaN);
    if (!target || isNaN(Number(target)) || daily_exercises_is_numeric) {
        res.send({
            error: "malformatted parameters"
        }).status(400);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    res.send(calculateExercises(daily_exercises, target));

});

const PORT = 3004;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});