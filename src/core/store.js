import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import paginationReducer from "../common/Pagination/paginationSlice";
import popularMoviesReducer from "../features/MainPage/popularMoviesSlice";
import popularPeopleReducer from "../features/PersonList/popularPeopleSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    popularMovies: popularMoviesReducer,
    popularPeople: popularPeopleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
