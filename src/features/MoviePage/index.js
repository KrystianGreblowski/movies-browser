import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Banner from "./Banner";
import Content from "./Content";
import { Container } from "./styled";
import LoadingPage from "../../common/LoadingPage";
import ErrorLoadingHandlingWrapper from "./ErrorLoadingHandlingWrapper";
import { useSelector } from "react-redux";
import {
  selectMovieDetailsData,
  selectMovieDetailsStatus,
} from "./movieDetailsSlice";
import { setBorder } from "../../common/NavigationBar/Navigation/navigationBorderSlice";

function MoviePage() {
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
  const movieDetailsData = useSelector(selectMovieDetailsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBorder("movies"));
  }, [dispatch]);

  return (
    <>
      {movieDetailsStatus === "loading" ? (
        <LoadingPage />
      ) : (
        <ErrorLoadingHandlingWrapper>
          <Container>
            {movieDetailsData.backdrop_path && <Banner />}
            {movieDetailsStatus !== "bannerSuccess" && <Content />}
          </Container>
        </ErrorLoadingHandlingWrapper>
      )}
    </>
  );
}

export default MoviePage;
