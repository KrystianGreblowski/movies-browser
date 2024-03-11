import styled from "styled-components";

export const Tiles = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
  }
`;

export const Tile = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  max-width: 324px;
  height: 650px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  padding: 16px;
  display: grid;
  grid-template-rows: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    max-width: 320px;
    grid-template-columns: 1fr auto;
    height: 201px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    max-width: 480px;
    grid-template-columns: 1fr auto;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    max-width: 480px;
    grid-template-columns: 1fr auto;
    height: auto;
  }
`;

export const Image = styled.img`
  max-width: 292px;
  height: 434px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    max-width: 114px;
    height: 169px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    height: auto;
  }
`;

export const Description = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }
`;

export const MovieTitle = styled.h1`
  margin-top: 16px;
  font-size: 22px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 35px;
  }
`;

export const MovieYear = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    margin-top: 4px;
    margin-bottom: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 26px;
  }
`;

export const MovieTypes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    margin-top: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-top: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    margin-top: 8px;
  }
`;

export const MovieType = styled.li`
  background-color: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px 8px 16px;
  border-radius: 5px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    padding: 4px 8px 4px 8px;
    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    padding: 4px 8px 4px 8px;
    font-size: 18px;
    margin-top: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    padding: 4px 8px 4px 8px;
    font-size: 20px;
    margin-top: 10px;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-top: 110px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    margin-top: 200px;
  }

`;

export const StarImage = styled.img`
  max-width: 24px;
  height: 23px;
  margin-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    max-width: 30px;
    height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    max-width: 35px;
    height: 35px;
  }
`;

export const Rate = styled.p`
  font-size: 16px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 25px;
    margin-top: 18px;
  }
`;

export const Votes = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 25px;
    margin-top: 18px;
  }
`;
