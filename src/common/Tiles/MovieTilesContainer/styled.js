import styled from "styled-components";

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    margin-bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    grid-template-columns: 1fr;
  }
`;
