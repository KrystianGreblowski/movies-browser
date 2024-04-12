import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
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
  CountryName,
  Rate,
  RateMax,
  RatingWrapper,
  Span,
  Votes,
  RateStar,
  MovieTypes,
  MovieType,
} from "./styled";
import {
  selectMovieDetailsData,
  selectMovieDetailsStatus,
} from "../../movieDetailsSlice";
import noMovieImage from "../../../../images/no-movie-image.png";
import ErrorPage from "../../../../common/ErrorPage";

const MainInfo = () => {
  const movieDetailsData = useSelector(selectMovieDetailsData);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
  const numberOfMovieTypes = 3;
  if (movieDetailsStatus === "error" || !movieDetailsData) {
    return <ErrorPage />;}
  return (
    
        <Container>
          <Post
            src={
              movieDetailsData.poster_path === null
                ? noMovieImage
                : "http://image.tmdb.org/t/p/w342" +
                  movieDetailsData.poster_path
            }
            alt={movieDetailsData.original_title}
          />
          <Description>
            <Caption>{movieDetailsData.original_title}</Caption>
            <MovieYear>{movieDetailsData.release_date.slice(0, 4)}</MovieYear>
            <Details>
              <Production>
                <Span>Production:</Span>
                <ProductionInfo>
                  {movieDetailsData.production_countries.map(
                    (country, index) => (
                      <CountryName key={nanoid()}>
                        {country.name}
                        {index !==
                          movieDetailsData.production_countries.length - 1 &&
                          ","}
                      </CountryName>
                    )
                  )}
                </ProductionInfo>
              </Production>
              <Production>
                <Span>Release date:</Span>
                <ProductionInfo>
                  {movieDetailsData.release_date.split("-").reverse().join(".")}
                </ProductionInfo>
              </Production>
            </Details>
            <MovieTypes>
              {movieDetailsData.genres
                .map((movieType) => (
                  <MovieType key={nanoid()}> {movieType.name} </MovieType>
                ))
                .slice(0, numberOfMovieTypes)}
            </MovieTypes>
            <RatingWrapper>
              <RateStar />
              <Rate>
                {movieDetailsData.vote_average
                  .toFixed(1)
                  .toString()
                  .replace(".", ",")}
              </Rate>
              <RateMax>/ 10</RateMax>
              <Votes>{movieDetailsData.vote_count} votes</Votes>
            </RatingWrapper>
          </Description>

          <Information>{movieDetailsData.overview}</Information>
        </Container>
      
  );
};

export default MainInfo;
