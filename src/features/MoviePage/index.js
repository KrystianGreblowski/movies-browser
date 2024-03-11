import Banner from "./Banner";
import Content from "./Content";
import { Header } from "./Header/styled";
import { Container } from "./styled";

function MoviePage() {
  return (
    <Container>
      <Header />
      <Banner />
      <Content />
    </Container>
  );
}

export default MoviePage;
