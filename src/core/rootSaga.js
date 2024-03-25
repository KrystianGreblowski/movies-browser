import { all } from "redux-saga/effects";
import { watchFetchCurrentMoviePage } from "../features/MainPage/popularMoviesSaga";
import { watchFetchPopularPeople } from "../features/PersonList/popularPeopleSaga";
import { watchFetchMovieTypes } from "../common/movieTypes/movieTypesSaga";
import { watchFetchMovieDetails } from "../features/MoviePage/movieDetailsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchCurrentMoviePage(),
    watchFetchPopularPeople(),
    watchFetchMovieTypes(),
    watchFetchMovieDetails(),
  ]);
}
