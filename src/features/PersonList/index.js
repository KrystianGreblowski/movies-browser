import PersonTile from "../../common/Tiles/PersonTile";
import Title from "./Title";
import { Container, Tiles } from "./styled";
import { usePopularPeople } from "./usePopularPeople";

const PersonList = () => {
  const popularPeopleData = usePopularPeople(1);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w185";

  return (
    <Container>
      <Title title={"Popular people"} />
      <Tiles>
        {popularPeopleData.map((popularPeople) => (
          <PersonTile
            key={popularPeople.id}
            image={imageBaseUrl + popularPeople.profile_path}
            name={popularPeople.name}
          />
        ))}
      </Tiles>
    </Container>
  );
};

export default PersonList;
