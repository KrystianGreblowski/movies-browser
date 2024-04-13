import styled from "styled-components";

export const DetailsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 220px;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 32px;
  }
`;
