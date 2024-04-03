import { useQueryParameter } from "../NavigationBar/SearchBar/queryParameters";
import { NoResultsWrapper, NoResultsImage } from "./styled";
import { TilesHeader } from "../../common/Tiles/TilesHeader/styled"

const NoResults = () => {
    const query = useQueryParameter("search");
    return (
        <NoResultsWrapper>
            <TilesHeader>Sorry, there are no results for "{query}"</TilesHeader>
            <NoResultsImage />
        </NoResultsWrapper>
    );
};

export default NoResults;