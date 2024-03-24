import styled from "styled-components";
import { ReactComponent as StarImage } from "../../../../images/Vector.svg";

export const LoadingPage = styled.div``;

export const ErrorPage = styled.div``;

export const Container = styled.div`
  min-height: 350px;
  display: flex;
  align-items: center;
  gap: 40px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px #bac7d580;
  border-radius: 5px;
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    align-items: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    padding: 16px;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    max-width: 300px;
    min-height: 350px;
  }
`;

export const Post = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 200px;
    height: 275px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    width: 114px;
    height: 169px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const Caption = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 16px;
  }
`;

export const MovieYear = styled.div`
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 17px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.stormGray};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-top: -16px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-top: -14px;
  }
`;

export const Span = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.color.stormGray};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const Production = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ProductionInfo = styled.div`
  margin: 0;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: row;
`;

export const CountryName = styled.p`
  font-size: 18px;
  margin: 0;
  margin-right: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 12px;
  }
`;

export const MovieTypes = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  padding: 0px;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    margin-top: -16px;
  }
`;

export const MovieType = styled.li`
  background-color: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px 8px 16px;
  border-radius: 5px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    padding: 4px 8px 4px 8px;
    font-size: 12px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    gap: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    gap: 6px;
    margin: -12px 0;
  }
`;

export const Rate = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 13px;
  }
`;
export const RateStar = styled(StarImage)`
  height: 24px;
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: 16px;
    width: 16px;
  }
`;

export const RateMax = styled.p`
  font-size: 14px;
  padding-top: 4px;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 11px;
    padding-bottom: 2.5px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    display: none;
  }
`;

export const Votes = styled.p`
  font-size: 14px;
  padding-top: 4px;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 13px;
    padding: 0;
    color: ${({ theme }) => theme.color.stormGray};
  }
`;

export const Information = styled.div`
  font-weight: 400px;
  font-size: 20px;
  line-height: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-left: -225px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    margin-top: 55px;
    margin-left: -200px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-left: -127px;
    margin-top: 15px;
    font-size: 14px;
    line-height: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    margin-top: 0;
  }
`;
