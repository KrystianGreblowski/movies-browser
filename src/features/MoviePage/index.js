import { useSelector } from "react-redux";
import Banner from "./Banner";
import Content from "./Content";
import { Container, LoadingPage, ErrorPage } from "./styled";
import {
  selectMovieDetailsData,
  selectMovieDetailsStatus,
} from "./movieDetailsSlice";

function MoviePage() {
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
  const movieDetailsData = useSelector(selectMovieDetailsData);

  return (
    <>
      {movieDetailsStatus === "loading" ? (
        <LoadingPage />
      ) : movieDetailsStatus === "done" ? (
        <Container>
          {movieDetailsData.backdrop_path !== null && <Banner />}
          <Content />
        </Container>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default MoviePage;
