import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import {
  Caption,
  Header,
  List,
  Logo,
  MoviesPageLink,
  PeoplePageLink,
  StyledNavigation,
} from "./styled";
import { toMainPage, toPersonList } from "../../../core/routes";
import { goToFirstPage } from "../../Pagination/paginationSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleClick = () => {
    dispatch(goToFirstPage());
  };

  const borderState = location.pathname.includes("/people")
    ? "people"
    : "movies";

  return (
    <StyledNavigation>
      <Header to={toMainPage()} onClick={handleClick}>
        <Logo />
        <Caption>Movies Browser</Caption>
      </Header>
      <List>
        <li>
          <MoviesPageLink
            to={toMainPage()}
            onClick={handleClick}
            $borderState={borderState === "movies"}
          >
            MOVIES
          </MoviesPageLink>
        </li>
        <li>
          <PeoplePageLink
            to={toPersonList()}
            onClick={handleClick}
            $borderState={borderState === "people"}
          >
            PEOPLE
          </PeoplePageLink>
        </li>
      </List>
    </StyledNavigation>
  );
};

export default Navigation;
