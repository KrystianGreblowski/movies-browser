import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Container, MoviePageLink, LoadingPage, ErrorPage } from "./styled";
import { TilesContainer } from "../../common/Tiles/MovieTilesContainer/styled";
import { TilesHeader } from "../../common/Tiles/TilesHeader/styled";
import { MovieTile } from "../../common/Tiles/MovieTilesContainer/MovieTile";
import Pagination from "../../common/Pagination";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import {
  fetchCurrentMoviesPage,
  selectPopularMoviesData,
  selectPopularMoviesStatus,
} from "./popularMoviesSlice";
import {
  fetchMovieTypesInit,
  selectMovieTypesData,
} from "../../common/movieTypes/movieTypesSlice";
import noMovieImage from "./no-movie-image.svg";
import { fetchMovieId } from "../MoviePage/movieDetailsSlice";

function MainPage() {
  const popularMoviesData = useSelector(selectPopularMoviesData);
  const popularMoviesStatus = useSelector(selectPopularMoviesStatus);
  const movieTypesData = useSelector(selectMovieTypesData);
  const currentPage = useSelector(selectCurrentPage);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w300";
  const numberOfMovieTypes = 3;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentMoviesPage(currentPage));
  }, [currentPage, dispatch]);

  useEffect(() => {
    dispatch(fetchMovieTypesInit());
  }, [dispatch]);

  return (
    <>
      {popularMoviesStatus === "loading" ? (
        <LoadingPage />
      ) : popularMoviesStatus === "done" ? (
        <Container>
          <TilesHeader>Popular movies</TilesHeader>

          <TilesContainer>
            {popularMoviesData.map((popularMovie, movieIndex) => (
              <MoviePageLink
                to={`/movies/${popularMovie.id}`}
                onClick={() => dispatch(fetchMovieId(popularMovie.id))}
                key={nanoid()}
              >
                <MovieTile
                  image={
                    popularMovie.poster_path === null
                      ? noMovieImage
                      : imageBaseUrl + popularMovie.poster_path
                  }
                  title={popularMovie.title}
                  year={popularMovie.release_date.slice(0, 4)}
                  type={movieTypesData
                    .filter((movieType) =>
                      popularMoviesData[movieIndex].genre_ids.includes(
                        movieType.id
                      )
                    )
                    .map((movieType) => movieType.name)
                    .slice(0, numberOfMovieTypes)}
                  rate={popularMovie.vote_average
                    .toFixed(1)
                    .toString()
                    .replace(".", ",")}
                  votes={popularMovie.vote_count}
                />
              </MoviePageLink>
            ))}
          </TilesContainer>

          <Pagination
            currentPage={currentPage}
            minPageLimit={1}
            maxPageLimit={100}
            url="/movies"
          />
        </Container>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default MainPage;
