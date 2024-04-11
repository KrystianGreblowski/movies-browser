import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
  margin-bottom: 123px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-bottom: 41px;
  }
`;

export const PersonPageLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;
