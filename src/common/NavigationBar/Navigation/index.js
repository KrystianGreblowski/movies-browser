import {
  Caption,
  Header,
  List,
  Logo,
  MoviePageLink,
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
          <MoviePageLink to={toMainPage()}>MOVIES</MoviePageLink>
        </li>
        <li>
          <PeoplePageLink to={toPersonList()}>PEOPLE</PeoplePageLink>
        </li>
      </List>
    </StyledNavigation>
  );
};

export default Navigation;
