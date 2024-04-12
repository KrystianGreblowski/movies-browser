import Banner from "./Banner";
import Content from "./Content";
import { Container } from "./styled";
import ErrorLoadingHandlingWrapper from "./ErrorLoadingHandlingWrapper";

function MoviePage() {
  
  return (
    <ErrorLoadingHandlingWrapper>
      <Container>
        <Banner />
        <Content />
      </Container>
    </ErrorLoadingHandlingWrapper>
  );
}

export default MoviePage;
