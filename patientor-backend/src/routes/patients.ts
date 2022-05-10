import express from "express";

const router = express.Router();

import patientsService from "../services/patientsService";

router.get('/', (_req, res) => {
    res.send(patientsService.getEntriesExceptSsn());
});

router.post('/', (_req, res) => {
    res.send('Saving a diagnoses!');
});

export default router;