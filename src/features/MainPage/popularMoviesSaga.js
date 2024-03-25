import { call, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../api/getPopularMovies";
import {
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchCurrentMoviesPage,
} from "./popularMoviesSlice";

function* fetchPopularMoviesHandler({ payload: pageNumber }) {
  try {
    const popularMovies = yield call(getPopularMovies, pageNumber);
    yield put(fetchPopularMoviesSuccess(popularMovies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* watchFetchCurrentMoviesPage() {
  yield takeEvery(fetchCurrentMoviesPage, fetchPopularMoviesHandler);
}
