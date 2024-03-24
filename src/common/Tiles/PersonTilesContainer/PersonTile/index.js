import { Tile, Image, Name, ExtraInfo } from "./styled";

const PersonTile = ({ image, name, extraInfo }) => {
  return (
    <Tile>
      <Image src={image} alt={name}></Image>
      <Name>{name}</Name>
      {extraInfo && <ExtraInfo>{extraInfo}</ExtraInfo>}
    </Tile>
  );
};

export default PersonTile;
