import styled from "styled-components";

export const Tile = styled.div`
  width: 208px;
  height: 339px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  margin-top: 16px;
  margin-bottom: 12px;
  width: 176px;
  height: 231x;
  border-radius: 5px;
  padding-bottom: 0;
  text-align: center;
`;

export const Name = styled.h1`
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  text-align: center;
  color: ${({ theme }) => theme.color.woodsmoke};
  margin: 0 16px;
`;
