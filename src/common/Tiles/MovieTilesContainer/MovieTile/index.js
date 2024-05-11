import { nanoid } from "nanoid";
import {
  Tile,
  Image,
  Description,
  MovieTitle,
  MovieYear,
  MovieTypes,
  MovieType,
  Rating,
  StarImage,
  Rate,
  Votes,
  MainInfo,
  NoVotes,
} from "./styled";
import star from "./star.svg";

export const MovieTile = ({ image, title, year, type, rate, votes }) => {
  return (
    <Tile>
      <Image src={image} alt={title} />
      <Description>
        <MainInfo>
          <MovieTitle>{title}</MovieTitle>
          <MovieYear>{year}</MovieYear>
          <MovieTypes>
            {type.map((movieType) => (
              <MovieType key={nanoid()}> {movieType} </MovieType>
            ))}
          </MovieTypes>
        </MainInfo>
        {votes > 0 ? (
          <Rating>
            <StarImage src={star} />
            <Rate>{rate}</Rate>
            <Votes>
              {votes} {votes === 1 ? "vote" : "votes"}
            </Votes>
          </Rating>
        ) : (
          <NoVotes>No votes yet</NoVotes>
        )}
      </Description>
    </Tile>
  );
};
