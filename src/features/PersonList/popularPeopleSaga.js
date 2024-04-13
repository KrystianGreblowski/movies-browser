import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getPopularPeople } from "../../api/getPopularPeople";
import {
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchPopularPeoplePageNumberForApi,
} from "./popularPeopleSlice";

function* fetchPopularPeopleHandler({ payload: pageNumber }) {
  try {
    const numberOfPagesToGetFromApi = 9;
    const highestNumberOfPageToGetFromApi =
      pageNumber + numberOfPagesToGetFromApi - 1;
    let pageNumberForApi = pageNumber;
    let popularPeopleData = [];

    for (
      pageNumberForApi;
      pageNumberForApi <= highestNumberOfPageToGetFromApi;
      pageNumberForApi++
    ) {
      let dataFromApi = yield call(getPopularPeople, pageNumberForApi);
      popularPeopleData = popularPeopleData.concat(dataFromApi);
    }
    
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
