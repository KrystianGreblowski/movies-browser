import styled from "styled-components";

export const MoviesContainer = styled.div`
  max-width: 1400px;
  padding: 0 16px;
  margin: 64px auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin: 40px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 24px auto;
  }
`;
