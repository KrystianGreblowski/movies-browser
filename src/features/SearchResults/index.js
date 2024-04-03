import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import noMovieImage from "../../images/no-movie-image.svg";
import noPersonImage from "../../images/not-found-person.svg";
import Pagination from "../../common/Pagination";
import LoadingPade from "../../common/LoadingPage";
import { TilesHeader } from "./styled";
import { MovieTile } from "../../common/Tiles/MovieTilesContainer/MovieTile";
import PersonsTile from "../../common/Tiles/PersonTile/PersonsTile";
import NoResults from "../../common/NoResults";
import Error from "../../common/ErrorPage";
import { Container } from "../MainPage/Container";
import { useSearchResults } from "./useSearchResults";
import { Tiles } from "../../common/Tiles/PersonTile/TilesContainer";
import { useGenres } from "./useGenres";
import { useQueryParameter } from "../../common/NavigationBar/SearchBar/queryParameters";
import { selectCurrentPage } from "../../common/Pagination/paginationSlice";
import {
  fetchCurrentPage,
  selectSearchMoviesData,
  selectSearchMoviesStatus,
} from "../MainPage/popularMoviesSlice";
import { TilesContainer } from "../../common/Tiles/MovieTilesContainer/styled";

function SearchResults() {
  const query = useQueryParameter("search");
  const location = useLocation();
  const isMoviesPage = location.pathname.startsWith("/movies");

  const { searchResults } = useSearchResults();

  const search_quantity = searchResults.data?.total_results;
  const search_list = searchResults.data?.results;
  const imageBaseUrlMovies = "https://image.tmdb.org/t/p/w300";
  const imageBaseUrlPerson = "https://image.tmdb.org/t/p/w185";

  const { genres } = useGenres();
  const genre_list = genres.data;
  const currentPage = useSelector(selectCurrentPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentPage(currentPage));
  }, [currentPage, dispatch]);

  
  return (
    <>
      {searchResults.status === "loading" ? (
        <Container>
          <TilesHeader>Search results for "{query}"</TilesHeader>
          <LoadingPade />
        </Container>
      ) : searchResults.status === "error" ? (
        <Error />
      ) : search_quantity === 0 ? (
        <NoResults />
      ) : isMoviesPage ? (
        <Container>
          <TilesHeader>
            Search results for “{query}" ({search_quantity})
          </TilesHeader>
          <TilesContainer>
            {search_list &&
              search_list.map((searchedMovie) => (
                <MovieTile
                  key={searchedMovie.id}
                  image={
                    searchedMovie.poster_path === null
                      ? noMovieImage
                      : imageBaseUrlMovies + searchedMovie.poster_path
                  }
                  type={searchedMovie.genre_ids.map(
                    (index) =>
                      genre_list?.find((item) => item.id === index).name
                  )}
                  title={searchedMovie.title}
                  year={searchedMovie.release_date.slice(0, 4)}
                  rate={searchedMovie.vote_average.toFixed(1).replace(".", ",")}
                  votes={searchedMovie.vote_count}
                />
              ))}
          </TilesContainer>
        </Container>
      ) : (
        <Container>
          <TilesHeader>
            Search results for “{query} ({search_quantity})”
          </TilesHeader>
          <Tiles>
            {search_list &&
              search_list.map((popularPeople) => (
                <PersonsTile
                  key={popularPeople.id}
                  image={
                    popularPeople.profile_path === null
                      ? noPersonImage
                      : imageBaseUrlPerson + popularPeople.profile_path
                  }
                  name={popularPeople.original_name}
                />
              ))}
          </Tiles>
        </Container>
      )}<Pagination
      currentPage={currentPage}
      minPageLimit={1}
      maxPageLimit={100}
    />
    </>
  );
}


export default SearchResults;