import { createSlice } from "@reduxjs/toolkit";

export const movieTypesSlice = createSlice({
  name: "movieTypes",
  initialState: {
    genres: [],
    status: "loading",
  },
  reducers: {
    fetchMovieTypesSuccess: (state, { payload: movieTypes }) => {
      state.genres = movieTypes.genres;
      state.status = "done";
    },
    fetchMovieTypesError: (state) => {
      state.status = "error";
    },
    fetchMovieTypesInit: (state) => state,
  },
});

export const {
  fetchMovieTypesSuccess,
  fetchMovieTypesError,
  fetchMovieTypesInit,
} = movieTypesSlice.actions;

export const selectMovieTypesData = (state) => state.movieTypes.genres;

export default movieTypesSlice.reducer;
