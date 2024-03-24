import { TileButton, Tile, Image, Name, ExtraInfo } from "./styled";

const PersonTile = ({ image, name, extraInfo }) => {
  return (
    <TileButton>
      <Tile>
        <Image src={image} alt={name}></Image>
        <Name>{name}</Name>
        {extraInfo && <ExtraInfo>{extraInfo}</ExtraInfo>}
      </Tile>
    </TileButton>
  );
};

export default PersonTile;
