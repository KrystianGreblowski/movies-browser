import PersonTile from "../../../../common/Tiles/PersonTilesContainer/PersonTile";
import { TilesHeader } from "../../../../common/Tiles/TilesHeader/styled";
import { TilesContainer } from "../../../../common/Tiles/PersonTilesContainer/styled";
import personImage from "../no-person-image.png";

const Crew = () => {
  return (
    <>
      <TilesHeader>Crew</TilesHeader>
      <TilesContainer>
        <PersonTile image={personImage} name={"Liu Yifei"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Liu Yifei"} />
      </TilesContainer>
    </>
  );
};

export default Crew;
