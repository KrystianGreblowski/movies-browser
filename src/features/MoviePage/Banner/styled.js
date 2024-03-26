import styled from "styled-components";

export const PosterContainer = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.black};
  position: relative;
  z-index: -3;
`;

export const ImagesWrapper = styled.div`
  max-width: 1356px;
  max-height: 770px;
  position: relative;
  margin: 0 auto;
`;

export const StyledPoster = styled.div`
  max-width: 1356px;
  max-height: 770px;
  box-shadow: inset 0 0 100px 100px rgba(0, 0, 0);
  z-index: -1;
`;

export const Poster = styled.img`
  max-width: 1356px;
  max-height: 770px;
  position: relative;
  z-index: -2;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  color: ${({ theme }) => theme.color.white};
  bottom: 0px;
  left: 0px;
  z-index: 3;
  position: absolute;
  text-align: left;
  padding: 0 16px;
  padding-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallLaptop}) {
    padding-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding-bottom: 0px;
  }
`;

export const Title = styled.div`
  font-size: 64px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    font-size: 58px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 34px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 24px;
  }
`;

export const Rating = styled.div`
  max-width: 130px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
  margin-bottom: 0;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin: 5px 0;
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin: 0;
  }
`;

export const StarImage = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    width: 16px;
  }
`;

export const Rate = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    font-size: 25px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    font-size: 14px;
  }
`;

export const RateMax = styled.p`
  font-size: 16px;
  padding-top: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    font-size: 10px;
  }
`;

export const Votes = styled.p`
  margin-top: 4px;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    font-size: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin: 0;
    padding-top: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    font-size: 10px;
  }
`;
