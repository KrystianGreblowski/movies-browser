import styled from "styled-components";

export const PosterContainer = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.black};
`;
export const ImagesWrapper = styled.div`
  max-width: 1356px;
  position: relative;
  max-height: 770px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.narrow}) {
    width: 90%;
  }
`;

export const Shadow = styled.img`
  max-width: 1356px;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Poster = styled.img`
  max-width: 1356px;
  z-index: 2;

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
  padding-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    padding-bottom: 10px;
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
  gap: 6px;

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
