import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import PersonTile from "./PersonTilesContainer/PersonTile";
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
import PersonTilePlaceholder from "../../../../common/Tiles/PersonTilesContainer/PersonTilePlaceholder";

const Cast = () => {
  const dispatch = useDispatch();
  const movieDetailsData = useSelector(selectMovieDetailsData);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w185";

  const numberOfTiles = movieDetailsData?.credits?.cast?.length || 0;

  return movieDetailsStatus === "placeholders" ? (
    <>
      <TilesHeader>Cast</TilesHeader>
      <PersonTilesContainer>
        {movieDetailsData.credits.cast.map(() => (
          <PersonTilePlaceholder key={nanoid()} image={noPersonImage} />
        ))}
      </PersonTilesContainer>
    </>
  ) : (
    <>
      {numberOfTiles > 0 && (
        <>
          <TilesHeader>Cast ({numberOfTiles})</TilesHeader>
          <PersonTilesContainer>
            {movieDetailsData.credits.cast.map((cast) => (
              <PersonPageLink
                to={`${toPersonDetails()}/${cast.id}`}
                onClick={() => dispatch(fetchPersonId(cast.id))}
                key={nanoid()}
              >
                <PersonTile
                  image={
                    cast.profile_path === null
                      ? noPersonImage
                      : imageBaseUrl + cast.profile_path
                  }
                  name={cast.name}
                  extraInfo={cast.character}
                />
              </PersonPageLink>
            ))}
          </PersonTilesContainer>
        </>
      )}
    </>
  );
};

export default Cast;
