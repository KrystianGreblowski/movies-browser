import { Tile, Image } from "./styled";

const PersonTilePlaceholder = ({ image }) => {
  return (
    <Tile>
      <Image src={image} alt={"noPersonImage"}></Image>
    </Tile>
  );
};

export default PersonTilePlaceholder;
