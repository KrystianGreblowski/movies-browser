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
import noMovieProfilePage from "../../../../images/no-movie-profile-image.png";
import ErrorPage from "../../../../common/ErrorPage";

const MainInfo = () => {
  const movieDetailsData = useSelector(selectMovieDetailsData);
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
  const numberOfMovieTypes = 3;
  if (movieDetailsStatus === "error" || !movieDetailsData) {
    return <ErrorPage />;
  }
  return movieDetailsStatus === "placeholders" ? (
    <Container>
      <Post src={noMovieProfilePage} alt={"noMovieImage"} />
    </Container>
  ) : (
    <Container>
      <Post
        src={
          movieDetailsData.poster_path === null
            ? noMovieProfilePage
            : "http://image.tmdb.org/t/p/w342" + movieDetailsData.poster_path
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
              {movieDetailsData.production_countries.map((country, index) => (
                <CountryName key={nanoid()}>
                  {country.name}
                  {index !== movieDetailsData.production_countries.length - 1 &&
                    ","}
                </CountryName>
              ))}
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
        {movieDetailsData.vote_count > 0 ? (
          <RatingWrapper>
            <RateStar />
            <Rate>
              {movieDetailsData.vote_average
                .toFixed(1)
                .toString()
                .replace(".", ",")}
            </Rate>
            <RateMax>/ 10</RateMax>
            <Votes>
              {movieDetailsData.vote_count}{" "}
              {movieDetailsData.vote_count === 1 ? "vote" : "votes"}
            </Votes>
          </RatingWrapper>
        ) : (
          <Votes>No votes yet</Votes>
        )}
      </Description>

      <Information>{movieDetailsData.overview}</Information>
    </Container>
  );
};

export default MainInfo;
