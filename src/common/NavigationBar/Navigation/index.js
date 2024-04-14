import { useDispatch } from "react-redux";
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

  const handleClick = () => {
    dispatch(goToFirstPage());
  };

  return (
    <StyledNavigation>
      <Header to="/">
        <Logo />
        <Caption>Movies Browser</Caption>
      </Header>
      <List>
        <li>
          <MoviesPageLink to={toMainPage()} onClick={handleClick}>
            MOVIES
          </MoviesPageLink>
        </li>
        <li>
          <PeoplePageLink to={toPersonList()} onClick={handleClick}>
            PEOPLE
          </PeoplePageLink>
        </li>
      </List>
    </StyledNavigation>
  );
};

export default Navigation;
