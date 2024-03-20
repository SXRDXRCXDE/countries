"use client";
// UNmemberSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    member: false, // Изначально установлено как false
};

export const UNmemberSlice = createSlice({
    name: "UNmember",
    initialState,
    reducers: {
        setMember: (state, action) => {
            state.member = action.payload;
        },
    },
});

export const { setMember } = UNmemberSlice.actions;

export default UNmemberSlice.reducer;

