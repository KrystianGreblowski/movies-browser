import { toMainPage } from "../../core/routes";
import { Button, ErrorMasege, Solution, StyledDanger, Warning } from "./styled";

const ErrorPage = () => {
    return (
        <ErrorMasege>
            <StyledDanger />
            <Warning>Ooops! Something went wrong... </Warning>
            <Solution>Please check your network connection <br /> and try again</Solution>
            <Button to={toMainPage()}>Back to home page</Button>
        </ErrorMasege>);
};

export default ErrorPage;