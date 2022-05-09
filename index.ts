import express from 'express';
import cors from 'cors';
import { calculateBmi } from './bmiCalculator';

const app = express();
app.use(cors());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get("/bmi", async (req, res) => {
    if (Number(req.query.height) && Number(req.query.weight)) {
    const height:number = Number(req.query.height);
    const weight:number = Number(req.query.weight);
    const bmi:string = calculateBmi(height, weight);
    
    res.send({
        height: height,
        weight: weight,
        bmi: bmi
    });
    } else {
        res.send({error: "malformatted parameters"})
    }

})

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});