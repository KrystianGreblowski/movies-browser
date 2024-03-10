import { Container } from "./Container";
import { TilesContainer } from "./TilesContainer";
import { ExampleTiles } from "./TilesContainer/Tiles";
import { TilesHeader } from "./TilesContainer/TilesHeader";

function MainPage() {
  return (
    <Container>
      <TilesContainer>
        <TilesHeader>Popular movies</TilesHeader>
        <ExampleTiles />
        <ExampleTiles />
      </TilesContainer>
    </Container>
  );
}

export default MainPage;
