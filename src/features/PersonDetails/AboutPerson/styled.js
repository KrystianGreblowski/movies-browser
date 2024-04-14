import styled, { css } from "styled-components";

export const AboutPersonContainerPlaceholder = styled.div`
  margin: 56px auto;
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 24px;
    margin: 32px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    padding: 16px;
    margin: 24px auto;
  }
`;

export const PersonImagePlaceholder = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 180px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    max-width: 116px;
  }
`;

export const AboutPersonContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  margin: 56px auto;
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: 0px 4px 12px 0px #bac7d580;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-gap: 32px;
    padding: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-gap: 24px;
    padding: 24px;
    margin: 32px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    grid-gap: 16px;
    padding: 16px;
    margin: 24px auto;
  }
`;

export const PersonImage = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
  grid-row: span 4;

  ${({ $longPersonInformation }) =>
    $longPersonInformation &&
    css`
      grid-row: auto;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 250px;
    grid-row: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 180px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    max-width: 116px;
  }
`;

export const PersonDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  margin-top: 8px;

  ${({ $longPersonInformation }) =>
    $longPersonInformation &&
    css`
      grid-column: span 2;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-column: span 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    gap: 16px;
    margin-top: 4px;
  }
`;

export const Caption = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 43.2px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 32px;
    line-height: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 30px;
    line-height: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-weight: 500;
    font-size: 18px;
    line-height: 22.2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18.2px;
  }
`;

export const Details = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const BirthDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 4px;
  }
`;

export const Span = styled.p`
  color: ${({ theme }) => theme.color.stormGray};
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 12px;
    line-height: 14.4px;
  }
`;

export const SpanInfo = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 12px;
    line-height: 14.4px;
  }
`;

export const PersonInformation = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  margin: 0;
  text-align: justify;
  grid-row: span 2;

  ${({ $longPersonInformation }) =>
    $longPersonInformation &&
    css`
      grid-column: span 3;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-column: span 3;
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 14px;
    line-height: 22.4px;
  }
`;
