import styled from "styled-components";

export const StyledNavigationBar = styled.div`
  background-color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    background-color: ${({ theme }) => theme.color.black};
  }
`;

export const Wrapper = styled.div`
  min-height: 94px;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    flex-wrap: wrap;

    padding: 18px 16px;
  }
`;
