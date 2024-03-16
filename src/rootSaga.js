import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/MainPage/popularMoviesSaga";

export default function* rootSaga() {
  yield all([watchFetchPopularMovies()]);
}
