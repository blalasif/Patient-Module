
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    height: '',
    weight: '',
    bloodGroup: '',
    ethnicity: '',
    medicationData: [],
    allergyData: [],
    rateOverallHealth: '',
    sleepinghours: '',
    improvesleep: '',
    howoftenexercise: '',
    physicalactivites: [],
    fruitsvegetables: '',
    howfastfood: '',
    waterhabit: '',
    loseweight: '',
    worklifebalance: '',
    hobbiesandinterest: '',
    handlestress: '',
    stressmanagement: '',
    friendsfamilytime: '',
    whereyouleave: '',
    doyousmoke: '',
    howyousmoke: '',
    howlongyousmoke: '',
    drinkalcohal: '',
    howmuchdrink: '',
    healthProblems: {
        selectedProblems: [],
        otherProblem: '',
        additionalInputs: []
    },
    familyHistory: [],
};

const medicalHistorySlice = createSlice({
    name: 'medicalHistory',
    initialState,
    reducers: {
        setMedicalHistory: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setMedicalHistory } = medicalHistorySlice.actions;
export default medicalHistorySlice.reducer;
