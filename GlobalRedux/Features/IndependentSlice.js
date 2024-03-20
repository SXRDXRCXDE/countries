"use client";
// IndependentSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isIndependent: false,
};

export const IndependentSlice = createSlice({
    name: "Independent",
    initialState,
    reducers: {
        setIndependent: (state, action) => {
            state.isIndependent = action.payload;
        },
    },
});

export const { setIndependent } = IndependentSlice.actions;

export default IndependentSlice.reducer;
