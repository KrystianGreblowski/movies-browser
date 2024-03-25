import { all } from "redux-saga/effects";
import { watchFetchCurrentMoviesPage } from "../features/MainPage/popularMoviesSaga";
import { watchFetchCurrentPeoplePage } from "../features/PersonList/popularPeopleSaga";
import { watchFetchMovieTypes } from "../common/movieTypes/movieTypesSaga";
import { watchFetchMovieDetails } from "../features/MoviePage/movieDetailsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchCurrentMoviesPage(),
    watchFetchCurrentPeoplePage(),
    watchFetchMovieTypes(),
    watchFetchMovieDetails(),
  ]);
}
