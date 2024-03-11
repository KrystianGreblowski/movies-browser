import styled from "styled-components";

export const Container = styled.main`
  max-width: 1368px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    max-width: 320px;
    padding: 8px;
  }
`;

