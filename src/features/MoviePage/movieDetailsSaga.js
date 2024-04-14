import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchMovieDetailsLoading,
  fetchMovieDetailsData,
  fetchMovieDetailsPlaceholders,
  fetchBannerSuccess,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchMovieId,
} from "./movieDetailsSlice";
import { getMovieDetails } from "../../api/getMovieDetails";

function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    yield put(fetchMovieDetailsLoading());
    const movieDetails = yield call(getMovieDetails, movieId);
    yield put(fetchMovieDetailsData(movieDetails));
    yield delay(500);
    yield put(fetchBannerSuccess());
    yield delay(200);
    yield put(fetchMovieDetailsPlaceholders());
    yield put(fetchMovieDetailsSuccess());
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* watchFetchMovieId() {
  yield takeEvery(fetchMovieId, fetchMovieDetailsHandler);
}
