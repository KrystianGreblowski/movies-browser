import styled from "styled-components";
import { ReactComponent as Search } from "../../../images/Search.svg";

export const StyledSearchBar = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 432px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-radius: 33px;
  min-height: 48px;
  padding: 12px 24px;
  margin-right: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-right: 16px;
    max-width: 1140px;
    width: 90%;
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
  line-height: 150%;
  color: ${({ theme }) => theme.color.white};

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 13px;
  }
`;
