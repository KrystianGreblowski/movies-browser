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
  selectSearchMoviesData,
  selectSearchMoviesStatus,
} from "./popularMoviesSlice";
import {
  fetchMovieTypesInit,
  selectMovieTypesData,
} from "../../common/movieTypes/movieTypesSlice";
import noMovieImage from "./Images/no-movie-image.svg";
import { useQueryParameter } from "../../common/NavigationBar/SearchBar/queryParameters";
import {
  selectSearchMoviesData,
  selectSearchMoviesStatus,
} from "../../common/NavigationBar/SearchBar/SearchMoviesSlice";

function SearchResults() {
  const query = (useQueryParameter = "search");
  const searchMoviesData = useSelector(selectSearchMoviesData);
  const searchMoviesStatus = useSelector(selectSearchMoviesStatus);
  // const movieTypesData = useSelector(selectMovieTypesData);
  // const currentPage = useSelector(selectCurrentPage);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w300";
  const numberOfMovieTypes = 3;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentPage(currentPage));
  }, [currentPage, dispatch]);

  useEffect(() => {
    dispatch(fetchMovieTypesInit());
  }, [dispatch]);

  return (
    <>
      {selectSearchMoviesStatus === "loading" ? (
        <LoadingPage />
      ) : searchMoviesStatus === "done" ? (
        <Container>
          <TilesHeader>
            {" "}
            Search results for “{query}” {/*tutaj wstawić ilość wyniku*/}
          </TilesHeader>
          <TilesContainer>
            {selectSearchMoviesData.map((searchMovies, movieIndex) => (
              <MovieTile
                key={searchMovies.id}
                image={
                  searchMovies.poster_path === null
                    ? noMovieImage
                    : imageBaseUrl + searchMovies.poster_path
                }
                title={searchMovies.title}
                year={searchMovies.release_date.slice(0, 4)}
                type={movieTypesData
                  .filter((movieType) =>
                    searchMoviesData[movieIndex].genre_ids.includes(
                      movieType.id
                    )
                  )
                  .map((movieType) => movieType.name)
                  .slice(0, numberOfMovieTypes)}
                rate={searchMovies.vote_average
                  .toFixed(1)
                  .toString()
                  .replace(".", ",")}
                votes={searchMovies.vote_count}
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

export default SearchResults;
