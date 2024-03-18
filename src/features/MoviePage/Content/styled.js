import styled from "styled-components";

export const MoviesContainer = styled.div`
  max-width: 1368px;
  margin: 56px auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.narrow}) {
    width: 95%;
  }
`;