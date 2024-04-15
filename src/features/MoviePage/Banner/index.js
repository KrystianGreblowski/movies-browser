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
import { selectMovieDetailsData } from "../movieDetailsSlice";

const Banner = () => {
  const movieDetailsData = useSelector(selectMovieDetailsData);

  return (
    <>
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
    </>
  );
};

export default Banner;
