import { createSlice } from "@reduxjs/toolkit";
import { getPersonDetailsFromLocalStorage } from "./personDetailsLocalStorage";

export const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState: getPersonDetailsFromLocalStorage(),
  reducers: {
    fetchPersonId: (state, { payload: personId }) => {
      state.personId = personId;
    },
    fetchPersonDetailsData: (state, { payload: personDetailsData }) => {
      state.data = personDetailsData;
    },
    fetchPersonDetailsLoading: (state) => {
      state.status = "loading";
    },
    fetchPersonDetailsPlaceholders: (state) => {
      state.status = "placeholders";
    },
    fetchPersonDetailsSuccess: (state) => {
      state.status = "success";
    },
    fetchPersonDetailsError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchPersonDetailsData,
  fetchPersonDetailsLoading,
  fetchPersonDetailsPlaceholders,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
  fetchPersonId,
} = personDetailsSlice.actions;

export const selectPersonDetails = (state) => state.personDetails;
export const selectPersonDetailsData = (state) => state.personDetails.data;
export const selectPersonDetailsStatus = (state) => state.personDetails.status;
export const selectPersonId = (state) => state.personDetails.personId;

export default personDetailsSlice.reducer;
