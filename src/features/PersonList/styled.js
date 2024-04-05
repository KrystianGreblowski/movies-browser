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
