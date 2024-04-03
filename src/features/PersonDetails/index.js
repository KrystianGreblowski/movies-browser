import AboutPerson from "./AboutPerson";
import Cast from "./Cast";
import Crew from "./Crew";
import { DetailsContainer } from "./styled";

function PersonDetails() {
  return (
    <DetailsContainer>
      <AboutPerson />
      <Cast />
      <Crew />
    </DetailsContainer>
  );
}

export default PersonDetails;
