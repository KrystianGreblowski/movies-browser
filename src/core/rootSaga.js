import { all } from "redux-saga/effects";
import { watchFetchCurrentMoviesPage } from "../features/MainPage/popularMoviesSaga";
import { watchFetchCurrentPeoplePage } from "../features/PersonList/popularPeopleSaga";
import { watchFetchMovieTypesInit } from "../common/movieTypes/movieTypesSaga";
import { watchFetchMovieId } from "../features/MoviePage/movieDetailsSaga";
import { watchFetchMovieDetailsSuccess } from "../features/MoviePage/localStorageSaga";

export default function* rootSaga() {
  yield all([
    watchFetchCurrentMoviesPage(),
    watchFetchCurrentPeoplePage(),
    watchFetchMovieTypesInit(),
    watchFetchMovieId(),
    watchFetchMovieDetailsSuccess(),
  ]);
}
