import PersonTile from "./PersonTile";
import Title from "./Title";
import { Container, Tiles } from "./styled";
import personImage from "./images/person-image.png";

const PersonList = () => {
  return (
    <Container>
      <Title title={"Popular People"} />
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
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott "} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Liu Yifei"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Liu Yifei"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
        <PersonTile image={personImage} name={"Jason Scott"} />
      </Tiles>
    </Container>
  );
};

export default PersonList;
