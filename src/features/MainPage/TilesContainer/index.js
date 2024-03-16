import styled from "styled-components";

export const TilesContainer = styled.article`
  max-width: 1368px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-bottom: 50px;
  }
`;
