import styled, { css } from "styled-components";
import { ReactComponent as LeftArrowIcon } from "./images/left-arrow.svg";
import { ReactComponent as RightArrowIcon } from "./images/right-arrow.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  max-width: 525px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    grid-gap: 8px;
    max-width: 232px;
    height: 24px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    grid-gap: 8px;
  }
`;

export const PagesInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  align-items: center;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    grid-gap: 2px;
  }
`;

export const TextInfo = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  color: ${({ theme }) => theme.color.waterloo};
  width: max-content;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 10px;
  }
`;

export const NumberInfo = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  color: ${({ theme }) => theme.color.woodsmoke};
  width: max-content;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    font-size: 10px;
  }
`;

export const LeftArrow = styled(LeftArrowIcon)`
  width: 7px;
  height: 11px;
  margin-right: 8px;
  fill: ${({ theme }) => theme.color.scienceBlue};

  ${({ $isButtonDisabled }) =>
    $isButtonDisabled &&
    css`
      fill: ${({ theme }) => theme.color.waterloo};
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    width: 5px;
    height: 8px;
    margin-right: 0;
  }
`;

export const RightArrow = styled(RightArrowIcon)`
  width: 7px;
  height: 11px;
  margin-left: 8px;
  fill: ${({ theme }) => theme.color.scienceBlue};

  ${({ $isButtonDisabled }) =>
    $isButtonDisabled &&
    css`
      fill: ${({ theme }) => theme.color.waterloo};
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    width: 5px;
    height: 8px;
    margin-left: 0;
  }
`;

export const TextButton = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    display: none;
  }
`;

export const FirstPage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 36px;
  border: none;
  background-color: ${({ theme }) => theme.color.pattensBlue};
  color: ${({ theme }) => theme.color.mineShaft};
  border-radius: 5px;
  transition: 0.4s filter ease;

  &:hover {
    cursor: pointer;
    filter: brightness(93%);

    &:disabled {
      cursor: auto;
      filter: none;
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.mystic};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    width: 38px;
    height: 24px;
    justify-content: space-evenly;
    padding: 0 8px;
  }
`;

export const PreviousPage = styled(FirstPage)`
  width: 106px;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    width: 29px;
    padding: 0;
  }
`;

export const NextPage = styled(FirstPage)`
  width: 78px;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    width: 29px;
    padding: 0;
  }
`;

export const LastPage = styled(FirstPage)`
  width: 75px;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobile}) {
    width: 38px;
    justify-content: space-evenly;
  }
`;
