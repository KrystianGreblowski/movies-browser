import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 56px;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    margin-bottom: 50px;
  }
`;

export const Tiles = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
  }
`;
