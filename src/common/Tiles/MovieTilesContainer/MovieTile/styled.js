import styled from "styled-components";

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  max-width: 324px;
  width: 100%;
  height: 690px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  padding: 16px;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 5px;
  text-align: left;

  &:hover {
    transition: 0.3s;
    transform: scale(105%);
  }

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
    grid-template-columns: auto 1fr;
    max-width: 360px;
    height: 201px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    max-width: 640px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 434px;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 114px;
    max-height: 169px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-left: 16px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    justify-content: flex-start;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 0;
  }
`;

export const MovieTitle = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 20.8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    font-size: 16px;
    line-height: 17.8px;
  }
`;

export const MovieYear = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    line-height: 18.9px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    font-size: 13px;
    line-height: 16.8px;
  }
`;

export const MovieTypes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0px;
  margin: 0;
`;

export const MovieType = styled.li`
  background-color: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 4px 8px;
    font-size: 10px;
    line-height: 11px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    padding: 4px 8px;
    font-size: 8px;
    line-height: 9px;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    gap: 6px;
  }
`;

export const StarImage = styled.img`
  width: 24px;
  height: 23px;
  margin: 0;
  margin-top: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 16px;
    height: 16px;
    margin-top: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    margin-top: 10px;
  }
`;

export const Rate = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  margin-top: 12px;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    line-height: 16.9px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    line-height: 14.9px;
  }
`;

export const Votes = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.color.waterloo};
  margin-top: 12px;
  margin-bottom: 0;
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    line-height: 16.9px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    font-size: 11px;
    line-height: 14.9px;
  }
`;
