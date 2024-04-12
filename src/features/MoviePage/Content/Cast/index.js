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

const Cast = () => {
  const [errorShown, setErrorShown] = useState(false);
  const movieDetailsData = useSelector(selectMovieDetailsData||{});
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
          <TilesHeader>Cast</TilesHeader>
          <PersonTilesContainer>
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
          </PersonTilesContainer>
        </>
      
  );
};

export default Cast;
