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

const Cast = () => {
  const dispatch = useDispatch();
  const movieDetailsData = useSelector(selectMovieDetailsData);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w185";
  const maxNumberOfTiles = 12;

  return (
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
                key={nanoid()}
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
