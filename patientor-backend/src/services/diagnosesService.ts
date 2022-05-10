import diagnosesData from "../../data/diagnoses";

import { diagnoseEntry } from "../types";

const getEntries = (): diagnoseEntry[] => {
    return diagnosesData;
};

const addDiary = () => {
    return null;
};

export default {
    getEntries,
    addDiary
};