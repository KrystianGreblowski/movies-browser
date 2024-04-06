import { all } from "redux-saga/effects";
import { watchFetchPageNumberForApi } from "../features/MainPage/popularMoviesSaga";
import { watchFetchPopularPeoplePageNumberForApi } from "../features/PersonList/popularPeopleSaga";
import { watchFetchMovieId } from "../features/MoviePage/movieDetailsSaga";
import { watchFetchMovieDetailsSuccess } from "../features/MoviePage/localStorageSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPageNumberForApi(),
    watchFetchPopularPeoplePageNumberForApi(),
    watchFetchMovieId(),
    watchFetchMovieDetailsSuccess(),
  ]);
}
