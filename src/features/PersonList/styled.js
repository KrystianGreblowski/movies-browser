import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 56px;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-bottom: 50px;
  }
`;

export const Tiles = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    grid-template-columns: 1fr 1fr;
  }
`;
