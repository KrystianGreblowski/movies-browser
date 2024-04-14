import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../api/getPopularMovies";
import {
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchPopularMoviesPageNumberForApi,
} from "./popularMoviesSlice";

function* fetchPopularMoviesHandler({ payload: pageNumber }) {
  try {
    const popularMoviesData = yield call(getPopularMovies, pageNumber);

    yield delay(500);
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
