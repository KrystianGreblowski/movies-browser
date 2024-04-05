import { call, put, takeEvery } from "redux-saga/effects";
import { getMovieTypes } from "../../api/getMovieTypes";
import {
  fetchMovieTypesSuccess,
  fetchMovieTypesError,
  fetchMovieTypesInit,
} from "./movieTypesSlice";

function* fetchMovieTypesHandler() {
  try {
    const movieTypes = yield call(getMovieTypes);
    yield put(fetchMovieTypesSuccess(movieTypes));
  } catch (error) {
    yield put(fetchMovieTypesError());
  }
}

export function* watchFetchMovieTypesInit() {
  yield takeEvery(fetchMovieTypesInit, fetchMovieTypesHandler);
}
