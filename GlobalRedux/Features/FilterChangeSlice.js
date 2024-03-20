"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const filterChangeSlice = createSlice({
    name: "filterChange",
    initialState,
    reducers: {
        toggleFilterChange: (state) => {
            return !state; // Toggle the current state (true -> false, false -> true)
        },
        setFilterChange: (state, action) => {
            return action.payload; // Set the state to the provided value
        },
    },
});

export const { toggleFilterChange, setFilterChange } = filterChangeSlice.actions;

export default filterChangeSlice.reducer;
