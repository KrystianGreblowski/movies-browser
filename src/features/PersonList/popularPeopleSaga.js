import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getPopularPeople } from "../../api/getPopularPeople";
import {
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchPopularPeoplePageNumberForApi,
} from "./popularPeopleSlice";

function* fetchPopularPeopleHandler({ payload: pageNumber }) {
  try {
    const popularPeopleData = yield call(getPopularPeople, pageNumber);
    yield delay(500);
    yield put(fetchPopularPeopleSuccess(popularPeopleData));
  } catch (error) {
    yield put(fetchPopularPeopleError());
  }
}

export function* watchFetchPopularPeoplePageNumberForApi() {
  yield takeEvery(
    fetchPopularPeoplePageNumberForApi,
    fetchPopularPeopleHandler
  );
}
