import Navigation from "./Navigation/index";
import SearchBar from "./SearchBar/index";
import { StyledNavigationBar, Wrapper } from "./styled";

const NavigationBar = () => {
  return (
    <StyledNavigationBar>
      <Wrapper>
        <Navigation />
        <SearchBar />
      </Wrapper>
    </StyledNavigationBar>
  );
};

export default NavigationBar;
