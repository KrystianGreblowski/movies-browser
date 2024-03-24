import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchMovieId,
} from "./movieDetailsSlice";
import { getMovieDetails } from "../../api/getMovieDetails";

function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    const movieDetails = yield call(getMovieDetails, movieId);
    yield put(fetchMovieDetailsSuccess(movieDetails));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* watchFetchMovieDetails() {
  yield takeEvery(fetchMovieId, fetchMovieDetailsHandler);
}
