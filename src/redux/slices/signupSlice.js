

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    signupData: {},
    accountDetails: {},
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setSignupData: (state, action) => {
            state.signupData = action.payload;

        },
        setAccountDetails: (state, action) => {
            state.accountDetails = action.payload;

        },
        setPassword: (state, action) => {
            state.signupData.password = action.payload;
        },
        editProfile: (state, action) => {
            state.signupData = action.payload
        },
        // logout: (state) => {
        //     return initialState; 
        // },

    },
});

export const { setSignupData, setAccountDetails, setPassword, editProfile, logout } = signupSlice.actions;
export default signupSlice.reducer;

