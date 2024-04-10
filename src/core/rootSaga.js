import { all } from "redux-saga/effects";
import { watchFetchPopularMoviesPageNumberForApi } from "../features/MainPage/popularMoviesSaga";
import { watchFetchPopularPeoplePageNumberForApi } from "../features/PersonList/popularPeopleSaga";
import { watchFetchMovieId } from "../features/MoviePage/movieDetailsSaga";
import { watchFetchMovieDetailsSuccess } from "../features/MoviePage/localStorageSaga";
import { watchFetchPersonId } from "../features/PersonDetails/personDetailsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPopularMoviesPageNumberForApi(),
    watchFetchPopularPeoplePageNumberForApi(),
    watchFetchMovieId(),
    watchFetchMovieDetailsSuccess(),
    watchFetchPersonId(),
  ]);
}
