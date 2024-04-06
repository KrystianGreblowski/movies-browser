import { call, put, takeEvery } from "redux-saga/effects";
import { getPopularPeople } from "../../api/getPopularPeople";
import {
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchPopularPeoplePageNumberForApi,
} from "./popularPeopleSlice";

function* fetchPopularPeopleHandler({ payload: pageNumber }) {
  try {
    const firstPageNumberForApi = pageNumber + (pageNumber - 1) * 2;
    const secondPageNumberForApi = firstPageNumberForApi + 1;
    const thirdPageNumberForApi = firstPageNumberForApi + 2;

    const popularPeopleFirstPage = yield call(
      getPopularPeople,
      firstPageNumberForApi
    );
    const popularPeopleSecondPage = yield call(
      getPopularPeople,
      secondPageNumberForApi
    );
    const popularPeopleThirdPage = yield call(
      getPopularPeople,
      thirdPageNumberForApi
    );

    const popularPeople = popularPeopleFirstPage.concat(
      popularPeopleSecondPage,
      popularPeopleThirdPage
    );

    yield put(fetchPopularPeopleSuccess(popularPeople));
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
