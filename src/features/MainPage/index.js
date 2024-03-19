import Pagination from "../../common/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Container, LoadingPage, ErrorPage } from "./Container";
import { TilesContainer } from "./TilesContainer";
import { MovieTile } from "./TilesContainer/MovieTile";
import { TilesHeader } from "./TilesHeader";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import {
  fetchCurrentPage,
  selectPopularMoviesData,
  selectPopularMoviesStatus,
} from "./popularMoviesSlice";
import {
  fetchMovieTypesInit,
  selectMovieTypesData,
} from "../../common/movieTypes/movieTypesSlice";
import noMovieImage from "./Images/no-movie-image.svg";
import Loader from "../../common/Loader";

function MainPage() {
  const popularMoviesData = useSelector(selectPopularMoviesData);
  const popularMoviesStatus = useSelector(selectPopularMoviesStatus);
  const movieTypesData = useSelector(selectMovieTypesData);
  const currentPage = useSelector(selectCurrentPage);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w300";
  const numberOfMovieTypes = 2;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentPage(currentPage));
  }, [currentPage, dispatch]);

  useEffect(() => {
    dispatch(fetchMovieTypesInit());
  }, [dispatch]);

  return (
    <>
      <Loader />
      {popularMoviesStatus === "loading" ? (
        <LoadingPage />
      ) : popularMoviesStatus === "done" ? (
        <Container>
          <TilesHeader>Popular movies</TilesHeader>

          <TilesContainer>
            {popularMoviesData.map((popularMovies, movieIndex) => (
              <MovieTile
                key={popularMovies.id}
                image={
                  popularMovies.poster_path === null
                    ? noMovieImage
                    : imageBaseUrl + popularMovies.poster_path
                }
                title={popularMovies.title}
                year={popularMovies.release_date.slice(0, 4)}
                type={movieTypesData
                  .filter((movieType) =>
                    popularMoviesData[movieIndex].genre_ids.includes(
                      movieType.id
                    )
                  )
                  .map((movieType) => movieType.name)
                  .slice(0, numberOfMovieTypes)}
                rate={popularMovies.vote_average
                  .toFixed(1)
                  .toString()
                  .replace(".", ",")}
                votes={popularMovies.vote_count}
              />
            ))}
          </TilesContainer>

          <Pagination
            currentPage={currentPage}
            minPageLimit={1}
            maxPageLimit={100}
          />
        </Container>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default MainPage;
