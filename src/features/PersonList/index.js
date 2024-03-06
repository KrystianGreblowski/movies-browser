import PersonTile from "./PersonTile";
import { Header } from "./Header";
import Title from "./Title";
import personImage from "./images/person-image.png";

const PersonList = () => {
  return (
    <>
      <Header />
      <Title title="Popular People" />
      <PersonTile image={personImage} name={"Jason Scott Lee Long name"} />
    </>
  );
};

export default PersonList;
