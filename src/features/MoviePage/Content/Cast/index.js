import PersonTile from "../../../../common/Tiles/PersonTile/PersonsTile/index";
import Title from "../../../../common/Tiles/PersonTile/Title/index";
import {Tiles} from "../../../../common/Tiles/PersonTile/index";
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
