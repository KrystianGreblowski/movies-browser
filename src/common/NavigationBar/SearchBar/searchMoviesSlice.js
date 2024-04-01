import { createSlice } from "@reduxjs/toolkit";

export const searchMoviesSlice = createSlice({
  name: "search",
  initialState: {
    page: 1,
    results: [],
    status: "loading",
  },
  reducers: {
    fetchSearchMoviesSuccess: (state, { payload: searchMoviesData }) => {
      state.results = searchMoviesData;
      state.status = "done";
    },
    fetchSearchMoviesError: (state) => {
      state.status = "error";
    },
    fetchCurrentPage: (state, { payload: pageNumber }) => {
      state.page = pageNumber;
    },
    // setMovies: (state, { payload: results }) => {
    //   state.results = results;
    //   state.isLoading = false;
    // },
  },
});

export const {
  fetchSearchMoviesSuccess,
  fetchSearchMoviesError,
  fetchCurrentPage,
//   setMovies,
} = searchMoviesSlice.actions;

// const selectMoviesState = (state) => state.results;

// export const selectMovies = (state) => selectMoviesState(state).results || [];
export const selectSearchMoviesData = (state) => state.searchMovies.results;
export const selectSearchMoviesStatus = (state) => state.searchMovies.status;
// export const selectIsLoading = (state) => state.results.isLoading;
// export const selectGetMovieByTitle = (state, moviesTitle) =>
//   selectMovies(state).find(({ title }) => title === moviesTitle);

// // export const selectSearchMoviesByQuery = (state, query) =>
// //   selectSearchMoviesData(state).filter(({ content }) =>
// //     content.toUpperCase().includes(query.trim().toUppercase())
// //   );
export default searchMoviesSlice.reducer;
