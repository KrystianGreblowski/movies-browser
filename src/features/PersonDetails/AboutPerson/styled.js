import styled from "styled-components";

export const AboutPersonContainer = styled.div`
  display: flex;
  gap: 40px;
  max-width: 1368px;
  margin: 56px auto;
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: auto 1fr;
    max-width: 550px;
  }
`;

export const PersonImage = styled.img`
  width: 100%;
  max-height: 564px;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 114px;
    max-height: 300px;
  }
`;

export const PersonDescription = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-left: 16px;
  }
`;

export const Caption = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 25px;
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
`;

export const Span = styled.p`
  color: ${({ theme }) => theme.color.stormGray};
  font-weight: 400;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
  }
`;

export const SpanInfo = styled.p`
  font-size: 18px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
  }
`;

export const PersonInformation = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin-top: 24px;
  line-height: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
  }
`;
