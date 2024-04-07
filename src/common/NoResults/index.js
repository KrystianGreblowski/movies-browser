import { useQueryParameter } from "../NavigationBar/SearchBar/queryParameters";
import { NoResultsWrapper, NoResultsImage } from "./styled";
import NoResult from "./NoResult.png";
import { TilesHeader } from "../../common/Tiles/TilesHeader/styled";

const NoResults = () => {
  const query = useQueryParameter("search");
  return (
    <NoResultsWrapper>
      <TilesHeader>Sorry, there are no results for "{query}"</TilesHeader>
      <NoResultsImage src={NoResult} alt="No Results Image" />
    </NoResultsWrapper>
  );
};

export default NoResults;
