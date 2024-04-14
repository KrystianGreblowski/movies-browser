import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { MovieTile } from "../../../common/Tiles/MovieTilesContainer/MovieTile/index";
import noMovieImage from "../../../images/no-movie-image.png";
import { TilesContainer } from "../../../common/Tiles/MovieTilesContainer/styled";
import { TilesHeader } from "../../../common/Tiles/TilesHeader/styled";
import {
  selectPersonDetailsData,
  selectPersonDetailsStatus,
} from "../personDetailsSlice";
import { useMovieTypesData } from "../../../api/useMovieTypesData";
import { MoviePageLink } from "../../../common/MoviePageLink/styled";
import { fetchMovieId } from "../../MoviePage/movieDetailsSlice";
import { toMovieDetails } from "../../../core/routes";
import MovieTilePlaceholder from "../../../common/Tiles/MovieTilesContainer/MovieTilePlaceholder";

const Cast = () => {
  const dispatch = useDispatch();
  const personDetailsData = useSelector(selectPersonDetailsData);
  const personDetailsStatus = useSelector(selectPersonDetailsStatus);
  const { movieTypesData, numberOfMovieTypes } = useMovieTypesData();

  const numberOfTiles = personDetailsData?.movie_credits?.cast?.length || 0;

  return (
    <>
      {personDetailsStatus === "placeholders" ? (
        <>
          <TilesHeader>Movies - cast ({numberOfTiles})</TilesHeader>
          <TilesContainer>
            {personDetailsData.movie_credits.cast.map(() => (
              <MovieTilePlaceholder key={nanoid()} image={noMovieImage} />
            ))}
          </TilesContainer>
        </>
      ) : (
        <>
          {numberOfTiles > 0 && (
            <>
              <TilesHeader>Movies - cast ({numberOfTiles})</TilesHeader>
              <TilesContainer>
                {personDetailsData.movie_credits.cast.map((cast) => (
                  <MoviePageLink
                    to={`${toMovieDetails()}/${cast.id}`}
                    onClick={() => dispatch(fetchMovieId(cast.id))}
                    key={nanoid()}
                  >
                    <MovieTile
                      image={
                        cast.poster_path === null
                          ? noMovieImage
                          : "https://image.tmdb.org/t/p/w300" + cast.poster_path
                      }
                      title={cast.original_title}
                      year={
                        cast.character && cast.release_date
                          ? `${cast.character} (${cast.release_date.slice(
                              0,
                              4
                            )})`
                          : cast.character
                          ? cast.character
                          : cast.release_date
                          ? `(${cast.release_date.slice(0, 4)})`
                          : ""
                      }
                      type={movieTypesData
                        .filter((movieType) =>
                          cast.genre_ids.includes(movieType.id)
                        )
                        .map((movieType) => movieType.name)
                        .slice(0, numberOfMovieTypes)}
                      rate={cast.vote_average
                        .toFixed(1)
                        .toString()
                        .replace(".", ",")}
                      votes={cast.vote_count}
                    />
                  </MoviePageLink>
                ))}
              </TilesContainer>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Cast;
