import styled from "styled-components";

export const Tiles = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
  }
`;

export const Tile = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 650px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  padding: 16px;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 100%;
    grid-template-columns: 113px auto;
    height: 201px;
  }
`;

export const Image = styled.img`
  max-width: 292px;
  height: 434px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 114px;
    height: 169px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-left: 16px;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  margin-left: 4px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 0;
    gap: 8px;
  }
`;

export const MovieTitle = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 15px;
  }
`;

export const MovieYear = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 13px;
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
  padding: 8px 16px 8px 16px;
  border-radius: 5px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 4px 8px 4px 8px;
    font-size: 10px;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 8px;
  }
`;

export const StarImage = styled.img`
  max-width: 24px;
  height: 23px;
  margin-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    max-width: 16px;
    height: 16px;
  }
`;

export const Rate = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 13px;
  }
`;

export const Votes = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
  margin-bottom: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 13px;
  }
`;
