import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AboutPerson from "./AboutPerson";
import Cast from "./Cast";
import Crew from "./Crew";
import { selectPersonDetailsStatus } from "./personDetailsSlice";
import { DetailsContainer } from "./styled";
import LoadingPage from "../../common/LoadingPage";
import ErrorLoadingHandlingWrapper from "./ErrorLoadingHandlingWrapper";
import { setBorder } from "../../common/NavigationBar/Navigation/navigationBorderSlice";

function PersonDetails() {
  const personDetailsStatus = useSelector(selectPersonDetailsStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBorder("people"));
  }, [dispatch]);

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
