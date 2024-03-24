import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import PersonTile from "../../../../common/Tiles/PersonTilesContainer/PersonTile";
import { TilesHeader } from "../../../../common/Tiles/TilesHeader/styled";
import { TilesContainer } from "../../../../common/Tiles/PersonTilesContainer/styled";
import noPersonImage from "../../images/no-person-image.png";
import { selectMovieDetailsData } from "../../movieDetailsSlice";

const Crew = () => {
  const movieDetailsData = useSelector(selectMovieDetailsData);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w185";
  const maxNumberOfTiles = 6;

  return (
    <>
      <TilesHeader>Crew</TilesHeader>
      <TilesContainer>
        {movieDetailsData.credits.crew
          .slice(0, maxNumberOfTiles)
          .map((crew) => (
            <PersonTile
              key={nanoid()}
              image={
                crew.profile_path === null
                  ? noPersonImage
                  : imageBaseUrl + crew.profile_path
              }
              name={crew.name}
              extraInfo={crew.job}
            />
          ))}
      </TilesContainer>
    </>
  );
};

export default Crew;
