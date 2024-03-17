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
} from "./styled";
import star from "../.././Images/Vector.svg";

export const MovieTile = ({ image, title, year, type, rate, votes }) => {
  return (
    <Tiles>
      <Tile>
        <Image src={image} alt={title} />
        <Description>
          <MovieTitle>{title}</MovieTitle>
          <MovieYear>{year}</MovieYear>
          <MovieTypes>
            {type.map((movieType) => (
              <MovieType key={nanoid()}> {movieType} </MovieType>
            ))}
          </MovieTypes>
          <Rating>
            <StarImage src={star} />
            <Rate>{rate}</Rate>
            <Votes>{votes}</Votes>
          </Rating>
        </Description>
      </Tile>
    </Tiles>
  );
};
