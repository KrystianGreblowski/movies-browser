import styled from "styled-components";
import { ReactComponent as StarImage } from "../../../../images/Vector.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px #bac7d580;
  border-radius: 5px;
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-gap: 32px;
    padding: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-gap: 24px;
    padding: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    padding: 16px;
    grid-gap: 16px;
  }
`;

export const Post = styled.img`
  max-width: 312px;
  height: auto;
  border-radius: 5px;
  grid-row: span 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-row: auto;
    max-width: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    max-width: 140px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    max-width: 114px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: start;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    justify-content: space-evenly;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    gap: 8px;
  }
`;

export const Caption = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 16px;
  }
`;

export const MovieYear = styled.div`
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    color: ${({ theme }) => theme.color.stormGray};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.stormGray};
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Span = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.color.stormGray};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    display: none;
  }
`;

export const Production = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 12px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
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
`;

export const MovieType = styled.li`
  background-color: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px 8px 16px;
  border-radius: 5px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    padding: 4px 8px;
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 10px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    gap: 6px;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
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
    padding:0;
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
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  align-self: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-column: span 2;
    font-size: 18px;
    line-height: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 14px;
    line-height: 22px;
  }
`;
