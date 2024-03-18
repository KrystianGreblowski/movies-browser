import { call, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../api/getPopularMovies";
import {
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchCurrentPage,
} from "./popularMoviesSlice";

function* fetchPopularMoviesHandler({ payload: pageNumber }) {
  try {
    const popularMovies = yield call(getPopularMovies, pageNumber);
    yield put(fetchPopularMoviesSuccess(popularMovies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeEvery(fetchCurrentPage, fetchPopularMoviesHandler);
}
