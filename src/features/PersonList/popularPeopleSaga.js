import { call, put, takeEvery } from "redux-saga/effects";
import { getPopularPeople } from "../../api/getPopularPeople";
import {
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchCurrentPage,
} from "./popularPeopleSlice";

function* fetchPopularPeopleHandler({ payload: pageNumber }) {
  try {
    const popularPeople = yield call(getPopularPeople, pageNumber);
    yield put(fetchPopularPeopleSuccess(popularPeople));
  } catch (error) {
    yield put(fetchPopularPeopleError());
  }
}

export function* watchFetchPopularPeople() {
  yield takeEvery(fetchCurrentPage, fetchPopularPeopleHandler);
}
