import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
  margin-bottom: 103px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 31px;
  }
`;

export const MoviePageLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

export const LoadingPage = styled.div``;

export const ErrorPage = styled.div``;
