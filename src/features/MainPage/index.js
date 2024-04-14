import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import { Container } from "./styled";
import { TilesContainer } from "../../common/Tiles/MovieTilesContainer/styled";
import { TilesHeader } from "../../common/Tiles/TilesHeader/styled";
import { MovieTile } from "../../common/Tiles/MovieTilesContainer/MovieTile";
import Pagination from "../../common/Pagination";
import {
  fetchPopularMoviesPageNumberForApi,
  selectPopularMoviesData,
  selectPopularMoviesStatus,
} from "./popularMoviesSlice";
import noMovieImage from "../../images/no-movie-image.png";
import { fetchMovieId } from "../MoviePage/movieDetailsSlice";
import { useMovieTypesData } from "../../api/useMovieTypesData";
import { toMainPage, toMovieDetails } from "../../core/routes";
import { MoviePageLink } from "../../common/MoviePageLink/styled";
import ErrorPage from "../../common/ErrorPage";
import LoadingPage from "../../common/LoadingPage";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import { MovieTilePlaceholder } from "../../common/Tiles/MovieTilesContainer/MovieTilePlaceholder/styled";

const MainPage = () => {
  const dispatch = useDispatch();
  const popularMoviesStatus = useSelector(selectPopularMoviesStatus);
  const popularMoviesData = useSelector(selectPopularMoviesData);
  const { movieTypesData, numberOfMovieTypes } = useMovieTypesData();
  const currentPage = useSelector(selectCurrentPage);
  const history = useHistory();

  useEffect(() => {
    const pageQueryParameter = currentPage === 1 ? "" : `?page=${currentPage}`;
    history.replace(`${toMainPage()}${pageQueryParameter}`);

    dispatch(fetchPopularMoviesPageNumberForApi(currentPage));
  }, [currentPage, history, dispatch]);

  return (
    <>
      {popularMoviesStatus === "loading" ? (
        <LoadingPage />
      ) : popularMoviesStatus === "placeholders" ? (
        <Container>
          <TilesHeader>Popular movies</TilesHeader>
          <TilesContainer>
            {popularMoviesData.map(() => (
              <MovieTilePlaceholder key={nanoid()} />
            ))}
          </TilesContainer>
        </Container>
      ) : popularMoviesStatus === "success" ? (
        <Container>
          <TilesHeader>Popular movies</TilesHeader>
          <TilesContainer>
            {popularMoviesData.map((popularMovie) => (
              <MoviePageLink
                to={`${toMovieDetails()}/${popularMovie.id}`}
                onClick={() => dispatch(fetchMovieId(popularMovie.id))}
                key={nanoid()}
              >
                <MovieTile
                  image={
                    popularMovie.poster_path === null
                      ? noMovieImage
                      : "https://image.tmdb.org/t/p/w300" +
                        popularMovie.poster_path
                  }
                  title={popularMovie.title}
                  year={popularMovie.release_date.slice(0, 4)}
                  type={movieTypesData
                    .filter((movieType) =>
                      popularMovie.genre_ids.includes(movieType.id)
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
            maxPageLimit={500}
          />
        </Container>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};
export default MainPage;
