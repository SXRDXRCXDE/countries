"use client";
// SelectedCountrySlugSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    slug: null,
};

export const SelectedCountrySlugSlice = createSlice({
    name: "SelectedCountrySlug",
    initialState,
    reducers: {
        setSlug: (state, action) => {
            state.slug = action.payload;
        },
    },
});

export const { setSlug } = SelectedCountrySlugSlice.actions;

export default SelectedCountrySlugSlice.reducer;
