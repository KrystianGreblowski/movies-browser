import PersonTile from "../../../../common/Tiles/PersonTile/TilesContainer/PersonsTile/index";
import Title from "../../../../common/Tiles/PersonTile/TilesContainer/Title/index";
import {Tiles} from "../../../../common/Tiles/PersonTile/TilesContainer/index";
import personImage from "../../../../images/person-image.png";

const Cast = () => {
  return (
    <>
      <Title title={"Cast"} />
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
