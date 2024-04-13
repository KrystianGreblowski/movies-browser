import styled from "styled-components";

export const PersonTilesContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallLaptop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallTablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
    margin-bottom: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
