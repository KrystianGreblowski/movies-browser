import { TileButton, Tile, Image, Name } from "./styled";

const PersonTile = ({ image, name }) => {
  return (
    <TileButton>
      <Tile>
        <Image src={image} alt={name}></Image>
        <Name>{name}</Name>
      </Tile>
    </TileButton>
  );
};

export default PersonTile;
