"use client";
// BorderSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    border: '',
};

export const borderSlice = createSlice({
    name: "border",
    initialState,
    reducers: {
        setBorder: (state, action) => {
            state.border = action.payload;
        },
    },
});

export const { setBorder } = borderSlice.actions;

export default borderSlice.reducer;
