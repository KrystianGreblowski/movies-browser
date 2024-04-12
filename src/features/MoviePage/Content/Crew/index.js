import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import PersonTile from "../../../../common/Tiles/PersonTilesContainer/PersonTile";
import { TilesHeader } from "../../../../common/Tiles/TilesHeader/styled";
import { PersonTilesContainer } from "../../../../common/Tiles/PersonTilesContainer/styled";
import noPersonImage from "../../../../images/no-person-image.png";
import {
  selectMovieDetailsData,
  selectMovieDetailsStatus,
} from "../../movieDetailsSlice";
import ErrorPage from "../../../../common/ErrorPage";
import { useState } from "react";

const Crew = () => {
  const [errorShown, setErrorShown] = useState(false);
  const movieDetailsData = useSelector(selectMovieDetailsData);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w185";
  const maxNumberOfTiles = 12;
  if (movieDetailsStatus === "error" || !movieDetailsData) {
    if (!errorShown) {
      setErrorShown(true);
      return <ErrorPage />;
    }
    return null;
  }
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
