import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../api/getPopularMovies";
import {
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchPopularMoviesPageNumberForApi,
} from "./popularMoviesSlice";

function* fetchPopularMoviesHandler({ payload: pageNumber }) {
  try {
    const popularMoviesFirstPageFromApi = yield call(
      getPopularMovies,
      pageNumber
    );
    const popularMoviesSecondPageFromApi = yield call(
      getPopularMovies,
      pageNumber + 1
    );

    const popularMoviesData = popularMoviesFirstPageFromApi.concat(
      popularMoviesSecondPageFromApi
    );
    yield delay(500);
    yield put(fetchPopularMoviesSuccess(popularMoviesData));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* watchFetchPopularMoviesPageNumberForApi() {
  yield takeEvery(
    fetchPopularMoviesPageNumberForApi,
    fetchPopularMoviesHandler
  );
}
