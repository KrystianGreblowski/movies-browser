import { createSlice } from "@reduxjs/toolkit";
import { getMovieDetailsFromLocalStorage } from "./movieDetailsLocalStorage";

export const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: getMovieDetailsFromLocalStorage(),
  reducers: {
    fetchMovieId: (state, { payload: movieId }) => {
      state.movieId = movieId;
      state.status = "loading";
    },
    fetchMovieDetailsSuccess: (state, { payload: movieDetailsData }) => {
      state.data = movieDetailsData;
      state.status = "done";
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchMovieId,
} = movieDetailsSlice.actions;

export const selectMovieDetails = (state) => state.movieDetails;
export const selectMovieDetailsData = (state) => state.movieDetails.data;
export const selectMovieDetailsStatus = (state) => state.movieDetails.status;
export const selectMovieId = (state) => state.movieDetails.movieId;

export default movieDetailsSlice.reducer;
