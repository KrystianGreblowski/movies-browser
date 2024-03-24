import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Banner from "./Banner";
import Content from "./Content";
import { Container, LoadingPage, ErrorPage } from "./styled";
import {
  fetchMovieDetailsInit,
  selectMovieDetailsData,
  selectMovieDetailsStatus,
} from "./movieDetailsSlice";

function MoviePage() {
  const movieDetailsStatus = useSelector(selectMovieDetailsStatus);
  const movieDetailsData = useSelector(selectMovieDetailsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetailsInit());
  }, [dispatch]);

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
