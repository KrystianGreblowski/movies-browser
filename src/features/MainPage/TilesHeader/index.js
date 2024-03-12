import styled from "styled-components";

export const TilesHeader = styled.h1`
  font-size: 36px;
  margin-top: 56px;
  margin-bottom: 24px;


  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 36px;
    margin-left: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 36px;
    margin-left: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 36px;
    margin-left: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 30px;
    margin-left: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    font-size: 20px;
    margin-left: 15px;
  }
`;
