import styled from "styled-components";

export const CrewContainer = styled.div`
  max-width: 1368px;
  margin: auto;
  margin-top: 64px;
`;

export const CrewTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 20px;
    line-height: 24px;
    margin-top: 24px;
    margin-bottom: 12px;
    margin-left: 15px;
  }
`;
