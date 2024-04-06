import styled from "styled-components";

export const Tile = styled.div`
  max-width: 208px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px #bac7d550;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 136px;
    padding: 8px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 231px;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-height: 178px;
  }
`;

export const Name = styled.h1`
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  text-align: center;
  color: ${({ theme }) => theme.color.woodsmoke};
  margin: 0;
  margin-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 18.2px;
    margin-top: 8px;
  }
`;

export const ExtraInfo = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  color: ${({ theme }) => theme.color.waterloo};
  margin: 0;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;