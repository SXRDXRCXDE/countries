//store.jsx

"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";


import filterChangeSlice from "./Features/FilterChangeSlice";
import ContinentSlice from "./Features/ContinentSlice";
import LanguageSlice from "./Features/LanguageSlice";
import CurrencySlice from "./Features/CurrencySlice";
import BorderSlice from "./Features/BorderSlice";
import UNmemberSlice from "./Features/UNmemberSlice";
import LandlockedSlice from "./Features/LandlockedSlice";
import IndependentSlice from "./Features/IndependentSlice";
import SortBySlice from "./Features/SortBySlice";
import selectedCountrySlugSlice from "./Features/SelectedCountrySlugSlice";
import dataTriggerSlice from "./Features/DataTriggerSlice";
import SortOrderSlice from "./Features/SortOrderSlice";


const rootReducer = combineReducers({
    continent : ContinentSlice ,
    language : LanguageSlice,
    currency : CurrencySlice,
    border : BorderSlice,
    unMember : UNmemberSlice,
    landlocked : LandlockedSlice,
    independent : IndependentSlice,
    sortBy : SortBySlice,
    sortOrder : SortOrderSlice,
    selectedCountrySlug : selectedCountrySlugSlice,
    dataTrigger : dataTriggerSlice,

    filterChange : filterChangeSlice
    //add all your reducers here
},);

export const store = configureStore({
    reducer: rootReducer,

});
