import styled from "styled-components";

export const LoadingPage = styled.div``;

export const ErrorPage = styled.div``;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
  margin-bottom: 123px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-bottom: 41px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  margin-top: 56px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 20px;
    line-height: 24px;
    margin-top: 24px;
    margin-bottom: 12px;
  }
`;

export const TilesContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallLaptop}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
    margin-bottom: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
