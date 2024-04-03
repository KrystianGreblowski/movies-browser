import styled from "styled-components";

export const AboutPersonContainer = styled.div`
  display: flex;
  gap: 40px;
  max-width: 1368px;
  margin: 56px auto;
  background-color: ${({ theme }) => theme.color.white};
`;

export const PersonImage = styled.img`
  width: 399px;
  height: 564px;
  border-radius: 5px;
`;

export const PersonDescription = styled.div``;

export const Caption = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 0;
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
`;

export const SpanInfo = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

export const PersonInformation = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin-top: 24px;
`;
