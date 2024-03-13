import {
  ImagesWrapper,
  OneMoreWrapper,
  Poster,
  PosterContainer,
  Rate,
  RateContainer,
  RateMax,
  Rating,
  Shadow,
  StarImage,
  Title,
  TitleWrapper,
  Votes,
} from "./styled";
import star from "../../../images/Vector.svg";
import bigPoster from "../../../images/Poster-big.png";
import shadow from "../../../images/Shadow.png";

const Banner = () => {
  return (
    <PosterContainer>
      <ImagesWrapper>
        <Poster src={bigPoster} alt="Poster" />
        <Shadow src={shadow} alt="Shadow Frame" />
        <TitleWrapper>
          <Title>Mulan long title</Title>
          <Rating>
            <StarImage src={star} />
            <RateContainer>
              <Rate>7,9</Rate>
              <RateMax>/ 10</RateMax>
              <Votes>335 votes</Votes>
            </RateContainer>
          </Rating>
        </TitleWrapper>
      </ImagesWrapper>
    </PosterContainer>
  );
};

export default Banner;
