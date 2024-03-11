import {
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
import bigPoster from "../../../images/Poster-big.png";
import shadow from "../../../images/Shadow.png";

const Banner = () => {
  return (
    <PosterContainer>
      <Poster src={bigPoster} alt="Poster" />
      <Shadow src={shadow} alt="Shadow Frame" />
      <TitleWrapper>
        <Title>Mulan long title</Title>
        <Rating>
          <StarImage src={star} />
          <Rate>7,9</Rate>
          <RateMax>/ 10</RateMax>
          
        </Rating>
        <Votes>335 votes</Votes>
      </TitleWrapper>
    </PosterContainer>
  );
};

export default Banner;
