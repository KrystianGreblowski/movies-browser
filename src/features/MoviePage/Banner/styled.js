import styled from "styled-components";

export const PosterContainer = styled.div`
  position: relative;
  max-width: 1920px;
  max-height: 770px;
  margin: auto;
`;

export const Shadow = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Poster = styled.img`
  max-width: 1368px;
  max-height: 770px;
  margin: 0 auto;
  display: flex;
  z-index: 2;
`;

export const TitleWrapper = styled.div`
  color: ${({ theme }) => theme.color.white};
  bottom: 56px;
  left: 276px;
  z-index: 3;
  position: absolute;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 64px;
  font-weight: 600;
  line-height: 77px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: -20px;
`;

export const StarImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const Rate = styled.p`
  font-size: 30px;
  font-weight: 500;
  line-height: 39px;
`;

export const RateMax = styled.p`
  font-size: 16px;
  line-height: 19px;
  padding-top: 10.7px;
`;

export const Votes = styled.p`
  margin: 0;
`;
