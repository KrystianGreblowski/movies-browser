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
import PersonTilePlaceholder from "../../../../common/Tiles/PersonTilesContainer/PersonTilePlaceholder";

const Cast = () => {
  const dispatch = useDispatch();
  const movieDetailsData = useSelector(selectMovieDetailsData);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w185";
  const maxNumberOfTiles = 10;

  return movieDetailsStatus === "placeholders" ? (
    <>
      <TilesHeader>Cast</TilesHeader>
      <PersonTilesContainer>
        {movieDetailsData.credits.cast.slice(0, maxNumberOfTiles).map(() => (
          <PersonTilePlaceholder key={nanoid()} image={noPersonImage} />
        ))}
      </PersonTilesContainer>
    </>
  ) : (
    <>
      <TilesHeader>Cast</TilesHeader>
      <PersonTilesContainer>
        {movieDetailsData.credits.cast
          .slice(0, maxNumberOfTiles)
          .map((cast) => (
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
  );
};

export default Cast;
