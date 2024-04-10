import MainInfo from "./MainInfo";
import Cast from "./Cast";
import Crew from "./Crew";
import { MoviesContainer } from "./styled";
import LoadingPage from "../../../common/LoadingPage";
import { selectMovieDetailsStatus } from "../movieDetailsSlice";
import { useSelector } from "react-redux";
import { Container } from "../../../common/Container/styled";
import ErrorPage from "../../../common/ErrorPage";

const Content = () => {

  const movieDetailsStatus = useSelector(selectMovieDetailsStatus)
  return (
    <>
      {movieDetailsStatus === "loading" ? (
        <LoadingPage />
      ) : movieDetailsStatus === "success" ? (
        <MoviesContainer>
          <MainInfo />
          <Cast />
          <Crew />
        </MoviesContainer>
      ) : movieDetailsStatus === "error" ? (
        <Container>
          <ErrorPage />
        </Container>
      ) : (
        <ErrorPage/>
      )}
    </>
  );
};
export default Content;
