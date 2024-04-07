import { call, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../api/getPopularMovies";
import {
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchPopularMoviesPageNumberForApi,
} from "./popularMoviesSlice";

function* fetchPopularMoviesHandler({ payload: pageNumber }) {
  try {
    const numberOfPagesToGetFromApi = 2;
    const highestNumberOfPageToGetFromApi =
      pageNumber + numberOfPagesToGetFromApi - 1;
    let pageNumberForApi = pageNumber;
    let popularMoviesData = [];

    for (
      pageNumberForApi;
      pageNumberForApi <= highestNumberOfPageToGetFromApi;
      pageNumberForApi++
    ) {
      let dataFromApi = yield call(getPopularMovies, pageNumberForApi);
      popularMoviesData = popularMoviesData.concat(dataFromApi);
    }

    yield put(fetchPopularMoviesSuccess(popularMoviesData));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* watchFetchPopularMoviesPageNumberForApi() {
  yield takeEvery(
    fetchPopularMoviesPageNumberForApi,
    fetchPopularMoviesHandler
  );
}
