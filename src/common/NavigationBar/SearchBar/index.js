import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { Icon, Input, StyledSearchBar } from "./styled";

const SearchBar = () => {
  const location = useLocation();
  const isMoviePage = location.pathname.startsWith("/movies");

  return (
    <StyledSearchBar>
      <Icon />
      <Input
        placeholder={
          isMoviePage ? "Search for movies..." : "Search for people..."
        }
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
