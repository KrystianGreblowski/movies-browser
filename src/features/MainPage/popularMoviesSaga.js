import { call, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../api/getPopularMovies";
import {
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchPageNumberForApi,
} from "./popularMoviesSlice";

function* fetchPopularMoviesHandler({ payload: pageNumber }) {
  try {
    const firstPageNumberForApi = pageNumber;
    const secondPageNumberForApi = pageNumber + 1;

    const popularMoviesFirstPageFromApi = yield call(
      getPopularMovies,
      firstPageNumberForApi
    );
    const popularMoviesSecondPageFromApi = yield call(
      getPopularMovies,
      secondPageNumberForApi
    );

    const popularMovies = popularMoviesFirstPageFromApi.concat(
      popularMoviesSecondPageFromApi
    );

    yield put(fetchPopularMoviesSuccess(popularMovies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* watchFetchPageNumberForApi() {
  yield takeEvery(fetchPageNumberForApi, fetchPopularMoviesHandler);
}
