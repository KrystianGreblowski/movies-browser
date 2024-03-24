import styled from "styled-components";

export const MoviesContainer = styled.div`
  max-width: 1400px;
  padding: 0 16px;
  margin: 56px auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.narrow}) {
    width: 95%;
  }
`;
