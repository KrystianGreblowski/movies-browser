import styled from "styled-components";

export const MovieTilePlaceholder = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  max-width: 324px;
  width: 100%;
  height: 690px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  padding: 16px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumLaptop}) {
    height: 660px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallLaptop}) {
    height: 630px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: 680px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallTablet}) {
    height: 650px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.extraSmallTablet}) {
    height: 610px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 360px;
    height: 201px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    max-width: 640px;
  }
`;
