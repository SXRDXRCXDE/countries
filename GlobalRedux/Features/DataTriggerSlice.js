"use client";
// DataTriggerSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trigger: false,
};

export const DataTriggerSlice = createSlice({
    name: "DataTrigger",
    initialState,
    reducers: {
        setTrigger: (state, action) => {
            state.trigger = action.payload;
        },
    },
});

export const { setTrigger } = DataTriggerSlice.actions;

export default DataTriggerSlice.reducer;
