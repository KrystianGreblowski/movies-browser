import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchPersonDetailsData,
  fetchPersonDetailsLoading,
  fetchPersonDetailsPlaceholders,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
  fetchPersonId,
} from "./personDetailsSlice";
import { getPersonDetails } from "../../api/getPersonDetails";

function* fetchPersonDetailsHandler({ payload: personId }) {
  try {
    yield put(fetchPersonDetailsLoading());
    const personDetails = yield call(getPersonDetails, personId);
    yield put(fetchPersonDetailsData(personDetails));
    yield delay(500);
    yield put(fetchPersonDetailsPlaceholders());
    yield put(fetchPersonDetailsSuccess());
  } catch (error) {
    yield put(fetchPersonDetailsError());
  }
}

export function* watchFetchPersonId() {
  yield takeEvery(fetchPersonId, fetchPersonDetailsHandler);
}
