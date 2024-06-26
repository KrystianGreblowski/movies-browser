import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import paginationReducer from "../common/Pagination/paginationSlice";
import popularMoviesReducer from "../features/MainPage/popularMoviesSlice";
import popularPeopleReducer from "../features/PersonList/popularPeopleSlice";
import movieDetailsReducer from "../features/MoviePage/movieDetailsSlice";
import personDetailsReducer from "../features/PersonDetails/personDetailsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    popularMovies: popularMoviesReducer,
    popularPeople: popularPeopleReducer,
    movieDetails: movieDetailsReducer,
    personDetails: personDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
