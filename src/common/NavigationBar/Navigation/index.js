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

const Navigation = () => {
  return (
    <StyledNavigation>
      <Header to="/">
        <Logo />
        <Caption>Movies Browser</Caption>
      </Header>
      <List>
        <li>
          <MoviesPageLink to={toMainPage()}>MOVIES</MoviesPageLink>
        </li>
        <li>
          <PeoplePageLink to={toPersonList()}>PEOPLE</PeoplePageLink>
        </li>
      </List>
    </StyledNavigation>
  );
};

export default Navigation;
