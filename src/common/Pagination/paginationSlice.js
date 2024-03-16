import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
  },
  reducers: {
    goToFirstPage: (state) => {
      state.currentPage = 1;
    },
    goToPreviousPage: (state) => {
      state.currentPage = state.currentPage - 1;
    },
    goToNextPage: (state) => {
      state.currentPage = state.currentPage + 1;

      console.log(state.currentPage);
    },
    goToLastPage: (state) => {
      state.currentPage = 500;
    },
  },
});

export const { goToFirstPage, goToPreviousPage, goToNextPage, goToLastPage } =
  paginationSlice.actions;

export const selectCurrentPage = (state) => state.pagination.currentPage;

export default paginationSlice.reducer;
