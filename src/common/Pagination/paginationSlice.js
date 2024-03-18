import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
    minPageLimit: 1,
    maxPageLimit: 1,
  },
  reducers: {
    initCurrentPage: (state, { payload: minPageLimit }) => {
      state.currentPage = minPageLimit;
    },
    initMinPageLimit: (state, { payload: minPageLimit }) => {
      state.minPageLimit = minPageLimit;
    },
    initMaxPageLimit: (state, { payload: maxPageLimit }) => {
      state.maxPageLimit = maxPageLimit;
    },
    goToFirstPage: (state) => {
      state.currentPage = state.minPageLimit;
    },
    goToPreviousPage: (state) => {
      state.currentPage = state.currentPage - 1;
    },
    goToNextPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
    goToLastPage: (state) => {
      state.currentPage = state.maxPageLimit;
    },
  },
});

export const {
  initCurrentPage,
  initMinPageLimit,
  initMaxPageLimit,
  goToFirstPage,
  goToPreviousPage,
  goToNextPage,
  goToLastPage,
} = paginationSlice.actions;

export const selectCurrentPage = (state) => state.pagination.currentPage;

export default paginationSlice.reducer;
