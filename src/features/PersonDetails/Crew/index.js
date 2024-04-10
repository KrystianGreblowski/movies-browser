import { CrewContainer, CrewTitle } from "./styled";
import { MovieTile } from "../../../common/Tiles/MovieTilesContainer/MovieTile/index";
import posterMovie from "../../../images/poster-movie.png";
import { TilesContainer } from "../../../common/Tiles/MovieTilesContainer/styled";

const Crew = () => {
  return (
    <CrewContainer>
      <CrewTitle>Movies - cast (4)</CrewTitle>
      <TilesContainer>
        <MovieTile
          image={posterMovie}
          title={"Mulan"}
          year={"2024"}
          type={["Action", "Sci-Fi"]}
          rate={"9.5"}
          votes={"105"}
        />
        <MovieTile
          image={posterMovie}
          title={"Mulan"}
          year={"2024"}
          type={["Action", "Sci-Fi"]}
          rate={"9.5"}
          votes={"105"}
        />
        <MovieTile
          image={posterMovie}
          title={"Mulan"}
          year={"2024"}
          type={["Action", "Sci-Fi"]}
          rate={"9.5"}
          votes={"105"}
        />
        <MovieTile
          image={posterMovie}
          title={"Mulan"}
          year={"2024"}
          type={["Action", "Sci-Fi"]}
          rate={"9.5"}
          votes={"105"}
        />
      </TilesContainer>
    </CrewContainer>
  );
};

export default Crew;
