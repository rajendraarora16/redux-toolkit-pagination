import { createSlice } from "@reduxjs/toolkit";

const reducerSliceForPagination = createSlice({
    name: "pagination",
    initialState: {
        currentPage: 1,
        recordsPerPage: 5
    },
    reducers: {
        updateCurrentPage: (state, action) => {
            state.currentPage = action?.payload;
        }
    }
});

export default reducerSliceForPagination.reducer;
export const { updateCurrentPage } = reducerSliceForPagination.actions;
