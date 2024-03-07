import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../../images/Video.svg";

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 50px;
  color: ${({ theme }) => theme.color.white};
  

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    justify-content: space-between;
    gap: 19px;
    margin-bottom: 16px;
    width: 100%;
  }
`;

export const Header = styled.div`
  min-height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 8px;
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
  width: 168px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    letter-spacing: -0.5px;
    width: 95px;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 0;
  padding: 0;
`;

export const PageLink = styled.button`
  font-size: 14px;
  font-weight: 600;
  padding: 14px 24px;
  border: 1px solid ${({ theme }) => theme.color.woodsmoke};
  background-color: ${({ theme }) => theme.color.woodsmoke};;
  color: ${({ theme }) => theme.color.white};
  border-radius: 24px;
  transition: 0.3s;
  min-width: 110px;
  

  &:hover {
    color: ${({ theme }) => theme.color.silver};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 12px;
    padding: 8px 12px;
    min-width: 10px;
  }
`;
