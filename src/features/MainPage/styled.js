import styled from "styled-components";

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

export const TilesContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.narrow}) {
    grid-template-columns: repeat(3, 324px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(2, 324px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: auto;
    margin-bottom: 16px;
  }
`;

export const LoadingPage = styled.div``;

export const ErrorPage = styled.div``;
