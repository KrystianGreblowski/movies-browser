import MainInfo from "./MainInfo";
import Cast from "./Cast";
import Crew from "./Crew";
import { MoviesContainer } from "./styled";

const Content = () => {
  return (
    <MoviesContainer>
      <MainInfo />
      <Cast />
      <Crew />
    </MoviesContainer>
  );
};

export default Content;
