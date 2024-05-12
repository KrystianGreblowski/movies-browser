import { useDispatch, useSelector } from "react-redux";
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
import { selectBorderState } from "./navigationBorderSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(goToFirstPage());
  };

  const borderState = useSelector(selectBorderState);

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
