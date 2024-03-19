import styled from "styled-components";

export const TilesHeader = styled.h1`
  font-size: 36px;
  margin-top: 56px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.narrow}) {
    max-width: 1000px;
    margin: 24px auto;
    margin-top: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 670px;
    margin: 24px auto;
    margin-top: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 550px;
    margin: 12px auto;
    margin-bottom: 24px;
    font-size: 18px;
    }
`;
