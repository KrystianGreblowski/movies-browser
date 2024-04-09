import styled from "styled-components";

export const AboutPersonContainer = styled.div`
  display: grid;
  grid-gap: 40px;
  max-width: 1368px;
  margin: 56px auto;
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  grid-template-columns: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    grid-gap: 16px;
    padding: 16px;
    margin: 24px auto;
  }
`;

export const PersonImage = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
  grid-row: span 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    max-width: 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    max-width: 100px;
    grid-row: auto;
  }
`;

export const PersonDescription = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-top: 0px;
    margin-left: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 5px;
  }
`;

export const Caption = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 18px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const BirthDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -25px;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    flex-direction: column;
  }
`;

export const Span = styled.p`
  color: ${({ theme }) => theme.color.stormGray};
  font-weight: 400;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-top: 30px;
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    margin-top: 30px;
  }
`;

export const SpanInfo = styled.p`
  font-size: 18px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-top: -20px;
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    margin-top: -20px;
  }
`;

export const PersonInformation = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  margin-top: -226px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallLaptop}) {
    margin-top: -226px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 18px;
    margin-top: -140px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallTablet}) {
    font-size: 15px;
    margin-top: -120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    margin-top: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    grid-column: span 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-size: 12px;
    line-height: 25px;
  }
`;
