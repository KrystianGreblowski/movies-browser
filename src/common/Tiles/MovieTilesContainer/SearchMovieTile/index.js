import {
  TileButton,
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
    <TileButton>
      <Tile>
        <Image src={image} alt={title} />
        <Description>
          <MainInfo>
            <MovieTitle>{title}</MovieTitle>
            <MovieYear>{year}</MovieYear>
            <MovieTypes>
              {type
                ? type.map((typeName, index) => (
                    <MovieType key={index}>{typeName}</MovieType>
                  ))
                : ""}
            </MovieTypes>
          </MainInfo>
          <Rating>
            <StarImage src={star} />
            <Rate>{rate}</Rate>
            <Votes>{votes} votes</Votes>
          </Rating>
        </Description>
      </Tile>
    </TileButton>
  );
};
