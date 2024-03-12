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
} from "./styled";
import star from "../.././Images/Vector.svg";

export const MovieTile = ({ image, title, year, type, rate, votes }) => {
  return (
    <Tiles>
      <Tile>
        <Image src={image} />
        <Description>
          <MovieTitle>{title}</MovieTitle>
          <MovieYear>{year}</MovieYear>
          <MovieTypes>
            <MovieType> {type} </MovieType>
          </MovieTypes>
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
