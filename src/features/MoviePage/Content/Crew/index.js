import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import PersonTile from "../../../../common/Tiles/PersonTilesContainer/PersonTile";
import { TilesHeader } from "../../../../common/Tiles/TilesHeader/styled";
import { PersonTilesContainer } from "../../../../common/Tiles/PersonTilesContainer/styled";
import { PersonPageLink } from "../../../../common/PersonPageLink/styled";
import noPersonImage from "../../../../images/no-person-image.png";
import { selectMovieDetailsData } from "../../movieDetailsSlice";
import { toPersonDetails } from "../../../../core/routes";
import { fetchPersonId } from "../../../PersonDetails/personDetailsSlice";

const Crew = () => {
  const dispatch = useDispatch();
  const movieDetailsData = useSelector(selectMovieDetailsData);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w185";
  const maxNumberOfTiles = 12;

  return (
    <>
      <TilesHeader>Crew</TilesHeader>
      <PersonTilesContainer>
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
      </PersonTilesContainer>
    </>
  );
};

export default Crew;
