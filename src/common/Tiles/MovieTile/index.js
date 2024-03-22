import { nanoid } from "nanoid";
import {
  Tiles,
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
} from "./styled";
import star from "./star.svg";

export const MovieTile = ({ image, title, year, type, rate, votes }) => {
  return (
    <Tiles>
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
          <Rating>
            <StarImage src={star} />
            <Rate>{rate}</Rate>
            <Votes>{votes} votes</Votes>
          </Rating>
        </Description>
      </Tile>
    </Tiles>
  );
};
