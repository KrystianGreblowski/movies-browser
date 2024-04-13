import { useSelector } from "react-redux";
import AboutPerson from "./AboutPerson";
import Cast from "./Cast";
import Crew from "./Crew";
import { selectPersonDetailsStatus } from "./personDetailsSlice";
import { DetailsContainer } from "./styled";

function PersonDetails() {
  const personDetailsStatus = useSelector(selectPersonDetailsStatus);

  return (
    <>
      {personDetailsStatus === "loading" ? (
        "LoadingPage"
      ) : personDetailsStatus === "success" ? (
        <DetailsContainer>
          <AboutPerson />
          <Cast />
          <Crew />
        </DetailsContainer>
      ) : (
        "ErrorPage"
      )}
    </>
  );
}

export default PersonDetails;
