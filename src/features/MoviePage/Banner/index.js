import {
  ImagesWrapper,
  Poster,
  PosterContainer,
  Rate,
  RateMax,
  Rating,
  Shadow,
  StarImage,
  Title,
  TitleWrapper,
  Votes,
} from "./styled";
import star from "../../../images/Vector.svg";
import shadow from "../../../images/Shadow.png";
import { useSelector } from "react-redux";
import { selectMovieDetailsData } from "../movieDetailsSlice";

const Banner = () => {
  const movieDetailsData = useSelector(selectMovieDetailsData);

  const posterBaseUrl = "http://image.tmdb.org/t/p/original";

  return (
    <PosterContainer>
      <ImagesWrapper>
        <Poster
          src={posterBaseUrl + movieDetailsData.backdrop_path}
          alt={movieDetailsData.original_title}
        />
        <Shadow src={shadow} alt={"Shadow Frame"} />
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
