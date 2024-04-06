import { createSlice } from "@reduxjs/toolkit";

export const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    page: 1,
    results: [],
    status: "loading",
  },
  reducers: {
    fetchPopularPeopleSuccess: (state, { payload: popularPeopleData }) => {
      state.results = popularPeopleData;
      state.status = "success";
    },
    fetchPopularPeopleError: (state) => {
      state.status = "error";
    },
    fetchPopularPeoplePageNumberForApi: (state, { payload: pageNumber }) => {
      state.page = pageNumber;
    },
  },
});

export const {
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchPopularPeoplePageNumberForApi,
} = popularPeopleSlice.actions;

export const selectPopularPeopleData = (state) => state.popularPeople.results;
export const selectPopularPeopleStatus = (state) => state.popularPeople.status;

export default popularPeopleSlice.reducer;
