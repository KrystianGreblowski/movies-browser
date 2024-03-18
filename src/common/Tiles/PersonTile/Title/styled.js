import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  margin-top: 56px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 32px;
    line-height: 36px;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 24px;
    line-height: 32px;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    font-size: 20px;
    line-height: 24px;
  }
`;
