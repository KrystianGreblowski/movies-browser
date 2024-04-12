import {
  ImagesWrapper,
  PosterContainer,
  Poster,
  StyledPoster,
  Rate,
  RateMax,
  Rating,
  StarImage,
  Title,
  TitleWrapper,
  Votes,
} from "./styled";
import star from "../../../images/Vector.svg";
import { useSelector } from "react-redux";
import {
  selectMovieDetailsData,
  selectMovieDetailsStatus,
} from "../movieDetailsSlice";
import ErrorPage from "../../../common/ErrorPage";
import { useState } from "react";

const Banner = () => {
  const [errorShown, setErrorShown] = useState(false);
  const movieDetailsData = useSelector(selectMovieDetailsData);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
  if (movieDetailsStatus === "error" || !movieDetailsData) {
    if (!errorShown) {
      setErrorShown(true);
      return <ErrorPage />;
    }
    return null;
  }
  return (
            <PosterContainer>
          <ImagesWrapper>
            <StyledPoster>
              <Poster
                src={
                  "http://image.tmdb.org/t/p/original" +
                  movieDetailsData.backdrop_path
                }
                alt={movieDetailsData.original_title}
              />
            </StyledPoster>
            <TitleWrapper>
              <Title>{movieDetailsData.original_title}</Title>
              <Rating>
                <StarImage src={star} />
                <Rate>
                  {movieDetailsData.vote_average
                    .toFixed(1)
                    .toString()
                    .replace(".", ",")}
                </Rate>
                <RateMax>/ 10</RateMax>
                <Votes>{movieDetailsData.vote_count} votes</Votes>
              </Rating>
            </TitleWrapper>
          </ImagesWrapper>
        </PosterContainer>
      
  );
};

export default Banner;
