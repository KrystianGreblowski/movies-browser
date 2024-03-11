import styled from "styled-components";

export const TilesContainer = styled.article`
  max-width: 1368px;
  height: 1391px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    grid-template-columns: 1fr;
  }

`;
