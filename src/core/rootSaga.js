import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "../features/MainPage/popularMoviesSaga";
import { watchFetchPopularPeople } from "../features/PersonList/popularPeopleSaga";

export default function* rootSaga() {
  yield all([watchFetchPopularMovies(), watchFetchPopularPeople()]);
}
