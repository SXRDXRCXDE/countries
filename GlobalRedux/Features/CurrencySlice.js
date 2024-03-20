"use client";
// CurrencySlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currency: '',
};

export const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setCurrency: (state, action) => {
            state.currency = action.payload;
        },
    },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
