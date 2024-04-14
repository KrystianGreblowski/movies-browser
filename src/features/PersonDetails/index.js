import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AboutPerson from "./AboutPerson";
import Cast from "./Cast";
import Crew from "./Crew";
import { selectPersonDetailsStatus } from "./personDetailsSlice";
import { DetailsContainer } from "./styled";
import LoadingPage from "../../common/LoadingPage";
import ErrorLoadingHandlingWrapper from "./ErrorLoadingHandlingWrapper";
import {
  setMovies,
  setPeople,
} from "../../common/NavigationBar/Navigation/navigationSlice";

function PersonDetails() {
  const personDetailsStatus = useSelector(selectPersonDetailsStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMovies(false));
    dispatch(setPeople(true));
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
