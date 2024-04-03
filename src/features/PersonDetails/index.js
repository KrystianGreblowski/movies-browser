import AboutPerson from "./AboutPerson";
import Cast from "./Cast";
import { DetailsContainer } from "./styled";

function PersonDetails() {
  return (
    <DetailsContainer>
      <AboutPerson />
      <Cast />
    </DetailsContainer>
  );
}

export default PersonDetails;
