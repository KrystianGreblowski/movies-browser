import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getPopularPeople } from "../../api/getPopularPeople";
import {
  fetchPopularPeopleLoading,
  fetchPopularPeopleData,
  fetchPopularPeoplePlaceholders,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchPopularPeoplePageNumberForApi,
} from "./popularPeopleSlice";

function* fetchPopularPeopleHandler({ payload: pageNumber }) {
  try {
    yield put(fetchPopularPeopleLoading());
    const popularPeopleData = yield call(getPopularPeople, pageNumber);
    yield put(fetchPopularPeopleData(popularPeopleData));
    yield delay(500);
    yield put(fetchPopularPeoplePlaceholders());
    yield put(fetchPopularPeopleSuccess());
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
