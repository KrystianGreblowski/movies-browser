import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { Container, MoviePageLink } from "./styled";
import { TilesContainer } from "../../common/Tiles/MovieTilesContainer/styled";
import { TilesHeader } from "../../common/Tiles/TilesHeader/styled";
import { MovieTile } from "../../common/Tiles/MovieTilesContainer/MovieTile";
import Pagination from "../../common/Pagination";
import { selectPopularMoviesStatus } from "./popularMoviesSlice";
import noMovieImage from "../../images/no-movie-image.png";
import { fetchMovieId } from "../MoviePage/movieDetailsSlice";
import { usePopularMoviesData } from "./usePopularMoviesData";
@@ -15,62 +14,52 @@ import { toMainPage } from "../../core/routes";

const MainPage = () => {
  const dispatch = useDispatch();
  const popularMoviesStatus = useSelector(selectPopularMoviesStatus);
  const popularMoviesData = usePopularMoviesData();
  const { movieTypesData, numberOfMovieTypes } = useMovieTypesData();
  const currentPage = useCurrentPage();

  return (
    <>
      {popularMoviesStatus === "loading" ? (
        ""
      ) : popularMoviesStatus === "success" ? (
        <Container>
          <TilesHeader>Popular movies</TilesHeader>
             <TilesContainer>
            {popularMoviesData.map((popularMovie) => (
              <MoviePageLink
                to={`/movies/${popularMovie.id}`}
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
              maxPageLimit={400}
              url={toMainPage()}
            />
          </Container>
        ) : (
          ""
        )}
      </>
        <Pagination
          currentPage={currentPage}
          minPageLimit={1}
          maxPageLimit={400}
          url={toMainPage()}
        />
      </Container>
  );
};
