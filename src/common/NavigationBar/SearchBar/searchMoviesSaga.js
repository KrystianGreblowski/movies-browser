// import { call, put, takeEvery } from "redux-saga/effects";
// import { getSearchQueryParameters } from "../../../api/getSearchQueryParameters";
// import {
//   fetchSearchMoviesSuccess,
//   fetchSearchMoviesError,
//   fetchCurrentPage,
// } from "./searchMoviesSlice";

// function* fetchSearchMoviesHandler({ payload: pageNumber }) {
//   try {
//     const searchMovies = yield call(getSearchQueryParameters, pageNumber);
//     yield put(fetchSearchMoviesSuccess(searchMovies));
//   } catch (error) {
//     yield put(fetchSearchMoviesError());
//   }
// }

// export function* watchFetchSearchMovies() {
//   yield takeEvery(fetchCurrentPage, fetchSearchMoviesHandler);
// }
