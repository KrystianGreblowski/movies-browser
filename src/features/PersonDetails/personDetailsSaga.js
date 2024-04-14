import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
  fetchPersonId,
} from "./personDetailsSlice";
import { getPersonDetails } from "../../api/getPersonDetails";

function* fetchPersonDetailsHandler({ payload: personId }) {
  try {
    const personDetails = yield call(getPersonDetails, personId);
    yield delay(500);
    yield put(fetchPersonDetailsSuccess(personDetails));
  } catch (error) {
    yield put(fetchPersonDetailsError());
  }
}

export function* watchFetchPersonId() {
  yield takeEvery(fetchPersonId, fetchPersonDetailsHandler);
}
