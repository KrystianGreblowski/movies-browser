import PersonTile from "../../../../common/Tiles/PersonTile/PersonsTile";
import PersonsTitle from "../../../../common/Tiles/PersonTile/Title";
import { Tiles } from "../../../../common/Tiles/PersonTile/";
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
