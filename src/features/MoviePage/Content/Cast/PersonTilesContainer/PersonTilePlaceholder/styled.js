import styled from "styled-components";

export const Tile = styled.div`
  max-width: 256px;
  width: 100%;
  height: 400px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px #bac7d550;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallLaptop}) {
    height: 375px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: 365px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 136px;
    height: 245px;
    padding: 8px;
  }

  @media (max-width: 530px) {
    height: 230px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    max-width: 136px;
    height: 240px;
    padding: 8px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 282px;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-height: 178px;
  }
`;
