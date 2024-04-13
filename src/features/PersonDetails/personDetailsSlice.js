import { createSlice } from "@reduxjs/toolkit";
import { getPersonDetailsFromLocalStorage } from "./personDetailsLocalStorage";

export const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState: getPersonDetailsFromLocalStorage(),
  reducers: {
    fetchPersonId: (state, { payload: personId }) => {
      state.personId = personId;
      state.status = "loading";
    },
    fetchPersonDetailsSuccess: (state, { payload: personDetailsData }) => {
      state.data = personDetailsData;
      state.status = "success";
    },
    fetchPersonDetailsError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
  fetchPersonId,
} = personDetailsSlice.actions;

export const selectPersonDetails = (state) => state.personDetails;
export const selectPersonDetailsData = (state) => state.personDetails.data;
export const selectPersonDetailsStatus = (state) => state.personDetails.status;
export const selectPersonId = (state) => state.personDetails.personId;

export default personDetailsSlice.reducer;
