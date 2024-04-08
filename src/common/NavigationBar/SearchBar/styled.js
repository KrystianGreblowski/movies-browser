import styled from "styled-components";
import { ReactComponent as Search } from "../../../images/Search.svg";

export const StyledSearchBar = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 40%;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-radius: 33px;
  padding: 12px 24px;
  max-height: 48px;
  margin-right: 16px;
  max-width: 432px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 30%;
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 100%;
    width: 100%;
    max-height: 44px;
  }
`;

export const Icon = styled(Search)`
  width: 24px;
  height: 24px;
`;

export const Input = styled.input`
  width: 100%;
  height: 200%;
  border: none;
  font-size: 16px;
  font-weight: 400;
  
  color: ${({ theme }) => theme.color.black};

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 12px;
    letter-spacing: -0.5px;
    width: 100%;
    margin-right: 0;
  }
`;
