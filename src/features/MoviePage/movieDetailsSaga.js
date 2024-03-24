import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchMovieDetailsInit,
} from "./movieDetailsSlice";
import { getMovieDetails } from "../../api/getMovieDetails";

function* fetchMovieDetailsHandler() {
  try {
    const movieDetails = yield call(getMovieDetails);
    yield put(fetchMovieDetailsSuccess(movieDetails));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* watchFetchMovieDetails() {
  yield takeEvery(fetchMovieDetailsInit, fetchMovieDetailsHandler);
}
