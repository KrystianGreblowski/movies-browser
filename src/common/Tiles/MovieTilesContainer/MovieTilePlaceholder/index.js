import { Tile, Image } from "./styled";

export const MovieTilePlaceholder = ({ image }) => {
  return (
    <Tile>
      <Image src={image} alt={"noMovieImage"} />
    </Tile>
  );
};
