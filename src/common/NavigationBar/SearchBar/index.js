import { Icon, Input, StyledSearchBar } from "./styled";

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <Icon />
      <Input placeholder={"Search for movies..."}/>
    </StyledSearchBar>
  );
};

export default SearchBar;