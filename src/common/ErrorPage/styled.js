import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Danger } from "../../images/Danger.svg";

export const StyledDanger = styled(Danger)`
  width: 120px;
  height: 120px;
  margin-top: 130px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 50px;
    width: 90px;
    height: 90px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mediumMobile}) {
    margin-top: 20px;
  }
`;

export const ErrorMessage = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Warning = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 43.2px;
  margin: auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 28px;
    line-height: 35.6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    font-size: 23px;
    line-height: 28.6px;
  }
`;

export const Solution = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 28.6px;
  text-align: center;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    font-size: 17px;
    line-height: 20.6px;
  }
`;

export const Button = styled(NavLink)`
  padding: 16px 24px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  border: none;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 12px;
  }
`;
