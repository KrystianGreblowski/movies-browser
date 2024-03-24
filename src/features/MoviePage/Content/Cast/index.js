import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import PersonTile from "../../../../common/Tiles/PersonTilesContainer/PersonTile";
import { TilesHeader } from "../../../../common/Tiles/TilesHeader/styled";
import { TilesContainer } from "../../../../common/Tiles/PersonTilesContainer/styled";
import noPersonImage from "../../images/no-person-image.png";
import { selectMovieDetailsData } from "../../movieDetailsSlice";

const Cast = () => {
  const movieDetailsData = useSelector(selectMovieDetailsData);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w185";
  const maxNumberOfTiles = 12;

  return (
    <>
      <TilesHeader>Cast</TilesHeader>
      <TilesContainer>
        {movieDetailsData.credits.cast
          .slice(0, maxNumberOfTiles)
          .map((cast) => (
            <PersonTile
              key={nanoid()}
              image={
                cast.profile_path === null
                  ? noPersonImage
                  : imageBaseUrl + cast.profile_path
              }
              name={cast.name}
              extraInfo={cast.character}
            />
          ))}
      </TilesContainer>
    </>
  );
};

export default Cast;
