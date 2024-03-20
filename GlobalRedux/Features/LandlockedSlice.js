"use client";
// LandlockedSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLandlocked: false,
};

export const LandlockedSlice = createSlice({
    name: "Landlocked",
    initialState,
    reducers: {
        setLandlocked: (state, action) => {
            state.isLandlocked = action.payload;
        },
    },
});

export const { setLandlocked } = LandlockedSlice.actions;

export default LandlockedSlice.reducer;
