import { Container } from "./Container";
import { TilesContainer } from "./TilesContainer";
import { MovieTile } from "./TilesContainer/MovieTile";
import { TilesHeader } from "./TilesHeader";
import { usePopularMovies } from "./usePopularMovies";

function MainPage() {
  const popularMoviesData = usePopularMovies(1);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

  return (
    <Container>
      <TilesHeader>Popular movies</TilesHeader>
      <TilesContainer>
        {popularMoviesData.map((popularMovies) => (
          <MovieTile
            key={popularMovies.id}
            image={imageBaseUrl + popularMovies.poster_path}
            title={popularMovies.title}
            year={popularMovies.release_date.slice(0, 4)}
            type={"drama"}
            rate={popularMovies.vote_average
              .toFixed(1)
              .toString()
              .replace(".", ",")}
            votes={popularMovies.vote_count}
          />
        ))}
      </TilesContainer>
    </Container>
  );
}

export default MainPage;
