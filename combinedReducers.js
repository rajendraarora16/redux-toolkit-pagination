
import { combineReducers } from "@reduxjs/toolkit";
import reducerSlice from "./reducerSlice";
import reducerSliceForPagination from "./reducerSliceForPagination";

const combinedReducers = combineReducers({
    fetchPost: reducerSlice,
    pagination: reducerSliceForPagination,
});

export default combinedReducers;
