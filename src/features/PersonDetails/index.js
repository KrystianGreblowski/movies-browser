import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AboutPerson from "./AboutPerson";
import Cast from "./Cast";
import Crew from "./Crew";
import { selectPersonDetailsStatus } from "./personDetailsSlice";
import { DetailsContainer } from "./styled";
import { fetchPersonId } from "./personDetailsSlice";

function PersonDetails() {
  const personDetailsStatus = useSelector(selectPersonDetailsStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPersonId(974169));
  }, [dispatch]); // po dodaniu Api i poprawieniu designu - usunąć

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
