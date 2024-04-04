import { takeEvery, select, call } from "redux-saga/effects";
import {
  fetchMovieDetailsSuccess,
  selectMovieDetails,
} from "./movieDetailsSlice";
import { saveMovieDetailsInLocalStorage } from "./movieDetailsLocalStorage";

function* saveMovieDetailsInLocalStorageHandler() {
  const movieDetails = yield select(selectMovieDetails);
  yield call(saveMovieDetailsInLocalStorage, movieDetails);
}

export function* watchFetchMovieDetailsSuccess() {
  yield takeEvery(
    fetchMovieDetailsSuccess.type,
    saveMovieDetailsInLocalStorageHandler
  );
}
