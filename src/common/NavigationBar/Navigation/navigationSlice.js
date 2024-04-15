import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    movies: true,
    people: false,
  },
  reducers: {
    setMovies: (state, { payload: moviesState }) => {
      state.movies = moviesState;
    },
    setPeople: (state, { payload: peopleState }) => {
      state.people = peopleState;
    },
  },
});

export const { setMovies, setPeople } = navigationSlice.actions;

export const selectMoviesState = (state) => state.navigation.movies;
export const selectPeopleState = (state) => state.navigation.people;

export default navigationSlice.reducer;
