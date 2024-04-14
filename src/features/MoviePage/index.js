import Banner from "./Banner";
import Content from "./Content";
import { Container } from "./styled";
import LoadingPage from "../../common/LoadingPage";
import ErrorLoadingHandlingWrapper from "./ErrorLoadingHandlingWrapper";
import { useSelector } from "react-redux";
import { selectMovieDetailsStatus } from "./movieDetailsSlice";

function MoviePage() {
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);

  return (
    <>
      {movieDetailsStatus === "loading" ? (
        <LoadingPage />
      ) : movieDetailsStatus === "bannerSuccess" ? (
        <ErrorLoadingHandlingWrapper>
          <Container>
            <Banner />
          </Container>
        </ErrorLoadingHandlingWrapper>
      ) : (
        <ErrorLoadingHandlingWrapper>
          <Container>
            <Banner />
            <Content />
          </Container>
        </ErrorLoadingHandlingWrapper>
      )}
    </>
  );
}

export default MoviePage;
