"use client"
// ContinentSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    continent: '',
};

export const continentSlice = createSlice({
    name: "continent",
    initialState,
    reducers: {
        setContinent: (state, action) => {
            state.continent = action.payload;
        },
    },
});

export const { setContinent } = continentSlice.actions;

export default continentSlice.reducer;
