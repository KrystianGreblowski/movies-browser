import { NoResultsHeader, NoResultsImage, NoResultsWrapper } from "./styled";
import NoResult from "../../images/NoResult.png"

const NoResults = () => {
    return (
        <NoResultsWrapper>
        <NoResultsHeader>Sorry, there are no results for “...”</NoResultsHeader>
        <NoResultsImage src={NoResult} alt="No Results Image"/>
        </NoResultsWrapper>
    );
};

export default NoResults;