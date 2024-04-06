import styled from "styled-components";

export const NoResultsWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 31px;
  }
`;

export const NoResultsImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 668px;
  width: 100%;
  height: 100%;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 400px;
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    width: 250px;
  }
`;
