"use client";
// SortOrderSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortOrder: "",
};

export const SortOrderSlice = createSlice({
    name: "SortOrder",
    initialState,
    reducers: {
        setSortOrder: (state, action) => {
            state.sortOrder = action.payload;
        },
    },
});

export const { setSortOrder } = SortOrderSlice.actions;

export default SortOrderSlice.reducer;
