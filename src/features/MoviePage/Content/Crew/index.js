import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import PersonTile from "../../../../common/Tiles/PersonTilesContainer/PersonTile";
import { TilesHeader } from "../../../../common/Tiles/TilesHeader/styled";
import { PersonTilesContainer } from "../../../../common/Tiles/PersonTilesContainer/styled";
import { PersonPageLink } from "../../../../common/PersonPageLink/styled";
import noPersonImage from "../../../../images/no-person-image.png";
import {
  selectMovieDetailsData,
  selectMovieDetailsStatus,
} from "../../movieDetailsSlice";
import { toPersonDetails } from "../../../../core/routes";
import { fetchPersonId } from "../../../PersonDetails/personDetailsSlice";

const Crew = () => {
  const dispatch = useDispatch();
  const movieDetailsData = useSelector(selectMovieDetailsData);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w185";
  const maxNumberOfTiles = 10;

  return (
    <>
      {movieDetailsStatus === "loading" ? (
        <>
          <TilesHeader>Crew</TilesHeader>
          <PersonTilesContainer>
            {[...Array(maxNumberOfTiles)].map(() => (
              <PersonTile
                key={nanoid()}
                image={noPersonImage}
                name=""
                extraInfo=""
              />
            ))}
          </PersonTilesContainer>
        </>
      ) : movieDetailsStatus === "success" ? (
        <>
          <TilesHeader>Crew</TilesHeader>
          <PersonTilesContainer>
            {movieDetailsData.credits.crew
              .slice(0, maxNumberOfTiles)
              .map((crew) => (
                <PersonPageLink
                  to={`${toPersonDetails()}/${crew.id}`}
                  onClick={() => dispatch(fetchPersonId(crew.id))}
                  key={nanoid()}
                >
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
                </PersonPageLink>
              ))}
          </PersonTilesContainer>
        </>
      ) : (
        "ErrorPage"
      )}
    </>
  );
};

export default Crew;
