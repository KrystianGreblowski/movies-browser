import PersonTile from "../../../../common/Tiles/PersonTile/TilesContainer/PersonsTile";
import PersonsTitle from "../../../../common/Tiles/PersonTile/TilesContainer/Title";
import { Tiles } from "../../../../common/Tiles/PersonTile/TilesContainer";
import personImage from "../../../../images/person-crew.png";

const Crew = () => {
  return (
    <>
      <PersonsTitle title={"Crew"} />
      <Tiles>
        <PersonTile image={personImage} name={"Liu Yifei"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Liu Yifei"} />
      </Tiles>
    </>
  );
};

export default Crew;
