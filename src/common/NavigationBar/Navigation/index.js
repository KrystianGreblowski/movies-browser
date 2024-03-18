import {
  Caption,
  Header,
  List,
  Logo,
  PageLink,
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
          <PageLink to={toMainPage()}>MOVIES</PageLink>
        </li>
        <li>
          <PageLink to={toPersonList()}>PEOPLE</PageLink>
        </li>
      </List>
    </StyledNavigation>
  );
};

export default Navigation;
