import styled, { css } from "styled-components";
import { ReactComponent as LogoIcon } from "../../../images/Video.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    justify-content: space-between;
    gap: 0px;
    margin-bottom: 16px;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Header = styled(NavLink)`
  min-height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  margin-left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 8px;
    margin-left: 0;
    margin-right: 15px;
  }
`;

export const Logo = styled(LogoIcon)`
  height: 40px;
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    height: 17px;
    width: 17px;
  }
`;

export const Caption = styled.h1`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.5px;
  width: max-content;
  padding-top: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 20px;
    padding-top: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    letter-spacing: -0.5px;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 0;
  padding: 0;
`;

export const MoviesPageLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  padding: 14px 24px;
  border: 1px solid ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  border-radius: 24px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.silver};
  }

  ${({ $moviesState }) =>
    $moviesState &&
    css`
      border-color: ${({ theme }) => theme.color.white};
    `}
  /* &.active {
    border-color: ${({ theme }) => theme.color.white};
  } */

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 12px;
    padding: 8px 12px;

    &:hover {
      color: ${({ theme }) => theme.color.white};
    }
  }
`;

export const PeoplePageLink = styled(MoviesPageLink)`
  margin-left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-left: 12px;
  }

  ${({ $peopleState }) =>
    $peopleState &&
    css`
      border-color: ${({ theme }) => theme.color.white};
    `}
`;
