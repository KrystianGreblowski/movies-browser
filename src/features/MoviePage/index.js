import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Banner from "./Banner";
import Content from "./Content";
import { Container } from "./styled";
import LoadingPage from "../../common/LoadingPage";
import ErrorLoadingHandlingWrapper from "./ErrorLoadingHandlingWrapper";
import { useSelector } from "react-redux";
import { selectMovieDetailsStatus } from "./movieDetailsSlice";
import {
  setMovies,
  setPeople,
} from "../../common/NavigationBar/Navigation/navigationSlice";

function MoviePage() {
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMovies(true));
    dispatch(setPeople(false));
  }, [dispatch]);

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
