import styled from "styled-components";
import { ReactComponent as StarImage } from "../../../../images/Vector.svg";

export const Container = styled.div`
  min-height: 544px;
  display: flex;
  align-items: center;
  gap: 40px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px #bac7d580;
  padding-left: 40px;
`;

export const Post = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px 40px 92px 0;
  gap: 24px;
`;

export const Caption = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 0;
`;

export const MovieYear = styled.div`
  font-size: 22px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Span = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.color.stormGray};
`;

export const Production = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ProductionInfo = styled.p`
  font-size: 18px;
  margin: 0;
  background-color: ${({ theme }) => theme.color.white};
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Rate = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin: 0;
`;
export const RateStar = styled(StarImage)`
  height: 24px;
  width: 24px;
`;

export const RateMax = styled.p`
  font-size: 14px;
  padding-top: 4px;
  margin: 0;
`;

export const Votes = styled.p`
  font-size: 14px;
  padding-top: 4px;
  margin: 0;
`;

export const Information = styled.div`
  font-weight: 400px;
  font-size: 20px;
  line-height: 32px;
`;
