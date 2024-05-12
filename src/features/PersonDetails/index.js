import { useSelector } from "react-redux";
import AboutPerson from "./AboutPerson";
import Cast from "./Cast";
import Crew from "./Crew";
import { selectPersonDetailsStatus } from "./personDetailsSlice";
import { DetailsContainer } from "./styled";
import LoadingPage from "../../common/LoadingPage";
import ErrorLoadingHandlingWrapper from "./ErrorLoadingHandlingWrapper";

function PersonDetails() {
  const personDetailsStatus = useSelector(selectPersonDetailsStatus);

  return (
    <>
      {personDetailsStatus === "loading" ? (
        <LoadingPage />
      ) : (
        <ErrorLoadingHandlingWrapper>
          <DetailsContainer>
            <AboutPerson />
            <Cast />
            <Crew />
          </DetailsContainer>
        </ErrorLoadingHandlingWrapper>
      )}
    </>
  );
}

export default PersonDetails;
