import { createSlice } from "@reduxjs/toolkit";

export const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    page: 1,
    results: [],
    status: "loading",
  },
  reducers: {
    fetchPopularMoviesSuccess: (state, { payload: popularMoviesData }) => {
      state.results = popularMoviesData;
      state.status = "success";
    },
    fetchPopularMoviesError: (state) => {
      state.status = "error";
    },
    fetchPopularMoviesPageNumberForApi: (state, { payload: pageNumber }) => {
      state.page = pageNumber;
    },
  },
});

export const {
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchPopularMoviesPageNumberForApi,
} = popularMoviesSlice.actions;

export const selectPopularMoviesData = (state) => state.popularMovies.results;
export const selectPopularMoviesStatus = (state) => state.popularMovies.status;

export default popularMoviesSlice.reducer;
