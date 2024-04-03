import styled from "styled-components";

export const TilesHeader = styled.h1`
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
