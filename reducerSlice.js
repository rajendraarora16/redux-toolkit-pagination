import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("fetch/fetchPosts", async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("API Network erorr");
    }
    return response.json();
});

const reducerSlice = createSlice({
    name: "fetch",
    initialState: {
        data: [],
        isLoading: false,
        isSuccess: false,
        error: "",
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isSuccess = false;
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export default reducerSlice.reducer;
