import { Tiles } from "../../../../common/Tiles/PersonTile/TilesContainer";
import PersonTile from "../../../../common/Tiles/PersonTile/TilesContainer/PersonsTile";
import PersonsTitle from "../../../../common/Tiles/PersonTile/TilesContainer/PersonsTitle";
import personImage from "../../../../images/person-image.png"

const Cast = () => {
  return (
    <>
      <PersonsTitle title={"Cast"} />
      <Tiles>
        <PersonTile image={personImage} name={"Liu Yifei"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Liu Yifei"} />
        <PersonTile image={personImage} name={"Jason Scott Lee"} />
        <PersonTile image={personImage} name={"Jason Scott Lee"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Liu Yifei"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
      </Tiles>
    </>
  );
};

export default Cast;
