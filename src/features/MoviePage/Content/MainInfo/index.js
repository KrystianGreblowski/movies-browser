import {
  Caption,
  Description,
  Details,
  Information,
  MovieYear,
  Post,
  Production,
  Container,
  ProductionInfo,
  Rate,
  RateMax,
  RatingWrapper,
  Span,
  Votes,
  RateStar,
  MovieTypes,
  MovieType,
} from "./styled";
import posterMovie from "../../../../images/poster-movie.png";

const MainInfo = () => {
  return (
    <Container>
      <Post src={posterMovie} />
      <Description>
        <Caption>Mulan long title</Caption>
        <MovieYear>2020</MovieYear>
        <Details>
          <Production>
            <Span>Production:</Span>
            <ProductionInfo>China, United States of America</ProductionInfo>
          </Production>
          <Production>
            <Span>Release date:</Span>
            <ProductionInfo>24.10.2020</ProductionInfo>
          </Production>
        </Details>
        <MovieTypes>
          <MovieType> Action </MovieType>
          <MovieType> Adventure </MovieType>
          <MovieType> Drama </MovieType>
        </MovieTypes>
        <RatingWrapper>
          <RateStar />
          <Rate>7,9</Rate>
          <RateMax>/ 10</RateMax>
          <Votes>335 votes</Votes>
        </RatingWrapper>
        <Information>
          A young Chinese maiden disguises herself as a male warrior in order to
          save her father. Disguises herself as a male warrior in order to save
          her father. A young Chinese maiden disguises herself as a male warrior
          in order to save her father.
        </Information>
      </Description>
    </Container>
  );
};

export default MainInfo;
