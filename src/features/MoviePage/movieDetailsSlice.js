import { createSlice } from "@reduxjs/toolkit";

export const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieId: 792307,
    data: {},
    status: "loading",
  },
  reducers: {
    fetchMovieId: (state, { payload: movieId }) => {
      state.movieId = movieId;
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

export const selectMovieDetailsData = (state) => state.movieDetails.data;
export const selectMovieDetailsStatus = (state) => state.movieDetails.status;

export default movieDetailsSlice.reducer;
