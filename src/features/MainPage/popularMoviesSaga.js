import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../api/getPopularMovies";
import {
  fetchPopularMoviesLoading,
  fetchPopularMoviesData,
  fetchPopularMoviesPlaceholders,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchPopularMoviesPageNumberForApi,
} from "./popularMoviesSlice";

function* fetchPopularMoviesHandler({ payload: pageNumber }) {
  try {
    yield put(fetchPopularMoviesLoading());
    const popularMoviesData = yield call(getPopularMovies, pageNumber);
    yield put(fetchPopularMoviesData(popularMoviesData));
    yield delay(500);
    yield put(fetchPopularMoviesPlaceholders());
    yield put(fetchPopularMoviesSuccess());
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
