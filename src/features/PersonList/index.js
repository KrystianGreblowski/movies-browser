import { Container } from "./Container";
import { TilesContainer } from "./TilesContainer";
import { ExampleTiles } from "./TilesContainer/Tiles";
import { TilesHeader } from "./TilesContainer/TilesHeader";

function PersonList() {
  return (
    <Container>
      <TilesContainer>
        <TilesHeader>Example page of PEOPLE</TilesHeader>
        <ExampleTiles />
        <ExampleTiles />
      </TilesContainer>
    </Container>
  );
}

export default PersonList;
