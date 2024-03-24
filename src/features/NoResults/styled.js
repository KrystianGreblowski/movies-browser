import styled from "styled-components";

export const NoResultsWrapper = styled.div`
    margin-left: 276px;
    margin-top: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoint.narrow}) {
    margin-left: 150px;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.smallTablet}) {
    margin-left: 50px;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    margin-top: 56px;
    margin-left: 0px;
  }
`;

export const NoResultsHeader = styled.h1`
    font-size: 36px;
    line-height: 43px;

    @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    text-align: center;
    font-size: 30px;
  }
`;

export const NoResultsImage = styled.img`
    margin-left: 350px;
    width: 668px;
    height: 509px;

    @media (max-width: ${({ theme }) => theme.breakpoint.narrow}) {
    margin-left: 250px;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.smallTablet}) {
    margin-left: 70px;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    margin-left: 0px;
    width: 570px;
    height: 430px;
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    margin-top: 20px;
    width: 325px;
    height: 235px;
  }
`;
