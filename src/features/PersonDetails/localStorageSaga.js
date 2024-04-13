import { takeEvery, select, call } from "redux-saga/effects";
import {
  fetchPersonDetailsSuccess,
  selectPersonDetails,
} from "./personDetailsSlice";
import { savePersonDetailsInLocalStorage } from "./personDetailsLocalStorage";

function* savePersonDetailsInLocalStorageHandler() {
  const personDetails = yield select(selectPersonDetails);
  yield call(savePersonDetailsInLocalStorage, personDetails);
}

export function* watchFetchPersoneDetailsSuccess() {
  yield takeEvery(
    fetchPersonDetailsSuccess.type,
    savePersonDetailsInLocalStorageHandler
  );
}
