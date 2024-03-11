import styled from "styled-components";

export const TilesHeader = styled.h1`
  font-size: 36px;
  margin-top: 56px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    margin-left: 
    18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 40px;
    margin-left: 85px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 40px;
    margin-left: 15px;
  }
`;
