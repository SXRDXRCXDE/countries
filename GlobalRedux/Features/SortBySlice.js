"use client";
// SortBySlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortBy: "", // Initial sorting option
};

export const SortBySlice = createSlice({
    name: "SortBy",
    initialState,
    reducers: {
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
    },
});

export const { setSortBy } = SortBySlice.actions;

export default SortBySlice.reducer;
