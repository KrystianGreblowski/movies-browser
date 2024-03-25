import {NoResultsImage, NoResultsWrapper } from "./styled";
import NoResult from "../../images/NoResult.png"
import { TilesHeader } from "../../common/Tiles/TilesHeader/styled"

const NoResults = () => {
    return (
        <NoResultsWrapper>
        <TilesHeader>Sorry, there are no results for “...”</TilesHeader>
        <NoResultsImage src={NoResult} alt="No Results Image"/>
        </NoResultsWrapper>
    );
};

export default NoResults;