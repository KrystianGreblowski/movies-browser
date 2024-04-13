import { toMainPage } from "../../core/routes";
import { Button, ErrorMessage, Solution, StyledDanger, Warning } from "./styled";

const ErrorPage = () => {
  return (
    <ErrorMessage>
      <StyledDanger />
      <Warning>Ooops! Something went wrong... </Warning>
      <Solution>
        Please check your network connection <br /> and try again
      </Solution>
      <Button to={toMainPage()}>Back to home page</Button>
    </ErrorMessage>
  );
};

export default ErrorPage;
