import { useEffect } from "react";
import Banner from "./Banner";
import Content from "./Content";
import { Container } from "./styled";
import { fetchMovieDetailsInit } from "./movieDetailsSlice";
import { useDispatch } from "react-redux";

function MoviePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetailsInit());
  }, [dispatch]);

  return (
    <Container>
      <Banner />
      <Content />
    </Container>
  );
}

export default MoviePage;
