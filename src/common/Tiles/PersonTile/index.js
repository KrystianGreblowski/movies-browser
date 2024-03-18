import { Tile, Image, Name } from "./styled";

const PersonTile = ({ image, name }) => {
  return (
    <Tile>
      <Image src={image} alt="Person Image"></Image>
      <Name>{name}</Name>
    </Tile>
  );
};

export default PersonTile;
