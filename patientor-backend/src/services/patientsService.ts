import patientData from "../../data/patients";

import { patientEntry, patientEntryExceptSsn } from "../types";

const getEntries = (): patientEntry[] => {
    return patientData;
};

const getEntriesExceptSsn = (): patientEntryExceptSsn[] => {
    return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({ id, name, dateOfBirth, gender, occupation }));
};

const addDiary = () => {
    return null;
};

export default {
    getEntries,
    addDiary,
    getEntriesExceptSsn
};