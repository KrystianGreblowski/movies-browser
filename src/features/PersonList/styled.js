import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 16px;
  margin-bottom: 123px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-bottom: 41px;
  }
`;

export const Tiles = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 50px;
  }
`;
