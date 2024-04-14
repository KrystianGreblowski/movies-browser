import { Tile, Image } from "./styled";

const MovieTilePlaceholder = ({ image }) => {
  return (
    <Tile>
      <Image src={image} alt={"noMovieImage"} />
    </Tile>
  );
};

export default MovieTilePlaceholder;
