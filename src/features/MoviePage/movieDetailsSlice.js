import { createSlice } from "@reduxjs/toolkit";
import { getMovieDetailsFromLocalStorage } from "./movieDetailsLocalStorage";

export const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: getMovieDetailsFromLocalStorage(),
  reducers: {
    fetchMovieId: (state, { payload: movieId }) => {
      state.movieId = movieId;
    },
    fetchMovieDetailsData: (state, { payload: movieDetailsData }) => {
      state.data = movieDetailsData;
    },
    fetchMovieDetailsLoading: (state) => {
      state.status = "loading";
    },
    fetchMovieDetailsPlaceholders: (state) => {
      state.status = "placeholders";
    },
    fetchBannerSuccess: (state) => {
      state.status = "bannerSuccess";
    },
    fetchMovieDetailsSuccess: (state) => {
      state.status = "success";
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchMovieDetailsData,
  fetchMovieDetailsLoading,
  fetchMovieDetailsPlaceholders,
  fetchBannerSuccess,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchMovieId,
} = movieDetailsSlice.actions;

export const selectMovieDetails = (state) => state.movieDetails;
export const selectMovieDetailsData = (state) => state.movieDetails.data;
export const selectMovieDetailsStatus = (state) => state.movieDetails.status;
export const selectMovieId = (state) => state.movieDetails.movieId;

export default movieDetailsSlice.reducer;
