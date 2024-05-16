import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import PersonTile from "./PersonTilesContainer/PersonTile";
import { TilesHeader } from "../../../../common/Tiles/TilesHeader/styled";
import { PersonTilesContainer } from "../../../../common/Tiles/PersonTilesContainer/styled";
import { PageLink } from "../../../../common/PageLink/styled";
import noPersonImage from "../../../../images/no-person-image.png";
import {
  selectMovieDetailsData,
  selectMovieDetailsStatus,
} from "../../movieDetailsSlice";
import { toPersonDetails } from "../../../../core/routes";
import { fetchPersonId } from "../../../PersonDetails/personDetailsSlice";
import PersonTilePlaceholder from "../../../../common/Tiles/PersonTilesContainer/PersonTilePlaceholder";

const Crew = () => {
  const dispatch = useDispatch();
  const movieDetailsData = useSelector(selectMovieDetailsData);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w185";

  const numberOfTiles = movieDetailsData?.credits?.crew?.length || 0;

  return movieDetailsStatus === "placeholders" ? (
    <>
      <TilesHeader>Crew</TilesHeader>
      <PersonTilesContainer>
        {movieDetailsData.credits.crew.map(() => (
          <PersonTilePlaceholder key={nanoid()} image={noPersonImage} />
        ))}
      </PersonTilesContainer>
    </>
  ) : (
    <>
      {numberOfTiles > 0 && (
        <>
          <TilesHeader>Crew ({numberOfTiles})</TilesHeader>
          <PersonTilesContainer>
            {movieDetailsData.credits.crew.map((crew) => (
              <PageLink
                to={`${toPersonDetails()}/${crew.id}`}
                onClick={() => dispatch(fetchPersonId(crew.id))}
                key={nanoid()}
              >
                <PersonTile
                  image={
                    crew.profile_path === null
                      ? noPersonImage
                      : imageBaseUrl + crew.profile_path
                  }
                  name={crew.name}
                  extraInfo={crew.job}
                />
              </PageLink>
            ))}
          </PersonTilesContainer>
        </>
      )}
    </>
  );
};

export default Crew;
