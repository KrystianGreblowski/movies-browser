import { Caption, Header, List, Logo, PageLink, StyledNavigation } from "./styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <Header>
        <Logo />
        <Caption>Movies Browser</Caption>
      </Header>
      <List>
        <li>
          <PageLink>MOVIES</PageLink>
        </li>
        <li>
          <PageLink>PEOPLE</PageLink>
        </li>
      </List>
    </StyledNavigation>
  );
};

export default Navigation;
