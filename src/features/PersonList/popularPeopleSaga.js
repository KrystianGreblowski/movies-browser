import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getPopularPeople } from "../../api/getPopularPeople";
import {
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchPopularPeoplePageNumberForApi,
} from "./popularPeopleSlice";

function* fetchPopularPeopleHandler({ payload: pageNumber }) {
  try {
    const firstPageFromApi = yield call(getPopularPeople, pageNumber);

    const secondPageFromApi = yield call(getPopularPeople, pageNumber + 1);

    const thirdPageFromApi = yield call(getPopularPeople, pageNumber + 2);

    const fourthPageFromApi = yield call(getPopularPeople, pageNumber + 3);

    const fifthPageFromApi = yield call(getPopularPeople, pageNumber + 4);

    const sixthPageFromApi = yield call(getPopularPeople, pageNumber + 5);

    const popularPeopleData = firstPageFromApi.concat(
      secondPageFromApi,
      thirdPageFromApi,
      fourthPageFromApi,
      fifthPageFromApi,
      sixthPageFromApi
    );
      yield delay(400)
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
