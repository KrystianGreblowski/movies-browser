import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { Icon, Input, StyledSearchBar } from "./styled";

const SearchBar = () => {
  const query = useQueryParameter("search");
  const replaseQueryParameter = useReplaceQueryParameter();
  const location = useLocation();
  const isMoviePage = location.pathname.startsWith("/movies");

  const onInputChange = ({ target }) => {
    replaseQueryParameter({
      key: "search",
      value: target.value.trim() !== "" ? target.value : undefined,
      resetPage: true,
    });
  };

  return (
    <StyledSearchBar>
      <Icon />
      <Input
        placeholder={
          isMoviePage ? "Search for movies..." : "Search for people..."
        }
        value={query || ""}
        onChange={onInputChange}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;

