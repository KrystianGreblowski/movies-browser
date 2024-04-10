import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { MovieTile } from "../../../common/Tiles/MovieTilesContainer/MovieTile/index";
import noMovieImage from "../../../images/no-movie-image.png";
import { TilesContainer } from "../../../common/Tiles/MovieTilesContainer/styled";
import { TilesHeader } from "../../../common/Tiles/TilesHeader/styled";
import { selectPersonDetailsData } from "../personDetailsSlice";
import { useMovieTypesData } from "../../../api/useMovieTypesData";
import { fetchMovieId } from "../../MoviePage/movieDetailsSlice";
import { MoviePageLink } from "../../../common/MoviePageLink/styled";

const Crew = () => {
  const dispatch = useDispatch();
  const personDetailsData = useSelector(selectPersonDetailsData);
  const { movieTypesData, numberOfMovieTypes } = useMovieTypesData();

  const numberOfTiles = personDetailsData?.movie_credits?.crew?.length || 0;

  return (
    <>
      <TilesHeader>Movies - crew ({numberOfTiles})</TilesHeader>
      <TilesContainer>
        {personDetailsData.movie_credits.crew.map((crew) => (
          <MoviePageLink
            to={`/movies/${crew.id}`}
            onClick={() => dispatch(fetchMovieId(crew.id))}
            key={nanoid()}
          >
            <MovieTile
              key={nanoid()}
              image={
                crew.poster_path === null
                  ? noMovieImage
                  : "https://image.tmdb.org/t/p/w300" + crew.poster_path
              }
              title={crew.original_title}
              year={
                crew.character && crew.release_date
                  ? `${crew.character} (${crew.release_date.slice(0, 4)})`
                  : crew.character
                  ? crew.character
                  : crew.release_date
                  ? `(${crew.release_date.slice(0, 4)})`
                  : ""
              }
              type={movieTypesData
                .filter((movieType) => crew.genre_ids.includes(movieType.id))
                .map((movieType) => movieType.name)
                .slice(0, numberOfMovieTypes)}
              rate={crew.vote_average.toFixed(1).toString().replace(".", ",")}
              votes={crew.vote_count}
            />
          </MoviePageLink>
        ))}
      </TilesContainer>
    </>
  );
};

export default Crew;
