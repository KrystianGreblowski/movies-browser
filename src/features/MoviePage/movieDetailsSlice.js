import { createSlice } from "@reduxjs/toolkit";

export const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    data: {},
    status: "loading",
  },
  reducers: {
    fetchMovieDetailsSuccess: (state, { payload: movieDetailsData }) => {
      state.data = movieDetailsData;
      state.status = "done";
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
    fetchMovieDetailsInit: (state) => state,
  },
});

export const {
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchMovieDetailsInit,
} = movieDetailsSlice.actions;

export const selectMovieDetailsData = (state) => state.movieDetails.data;
export const selectMovieDeteilsStatus = (state) => state.movieDetails.status;

export default movieDetailsSlice.reducer;
