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
import { selectMoviesState, selectPeopleState } from "./navigationSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(goToFirstPage());
  };

  const moviesState = useSelector(selectMoviesState);
  const peopleState = useSelector(selectPeopleState);

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
            $moviesState={moviesState}
          >
            MOVIES
          </MoviesPageLink>
        </li>
        <li>
          <PeoplePageLink
            to={toPersonList()}
            onClick={handleClick}
            $peopleState={peopleState}
          >
            PEOPLE
          </PeoplePageLink>
        </li>
      </List>
    </StyledNavigation>
  );
};

export default Navigation;
