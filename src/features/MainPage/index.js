import { Container } from "./Container";
import { Header } from "./Header";
import { TilesContainer } from "./TilesContainer";
import { ExampleTiles } from "./TilesContainer/Tiles";
import { TilesHeader } from "./TilesContainer/TilesHeader";


function MainPage() {
    return (
        <Container>
            <Header />
            <TilesContainer>
                <TilesHeader>Popular movies</TilesHeader>
                <ExampleTiles />
                <ExampleTiles />
            </TilesContainer>
        </Container>
    )
}

export default MainPage;