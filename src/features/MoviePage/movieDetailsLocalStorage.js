const localStorageMovieDetailsKey = "movieDetails";

export const saveMovieDetailsInLocalStorage = (movieDetails) =>
  localStorage.setItem(
    localStorageMovieDetailsKey,
    JSON.stringify(movieDetails)
  );

export const getMovieDetailsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageMovieDetailsKey)) || {
    movieId: 0,
    data: {},
    status: "loading",
  };
