import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./combineReducer";

const store = configureStore({
    reducer: combinedReducers
});

export default store;
