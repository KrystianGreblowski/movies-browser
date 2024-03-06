import styled from "styled-components";

export const StyledNavigationBar = styled.div`
background-color: ${({ theme }) => theme.color.woodsmoke};`

export const Wrapper = styled.div`
  min-height: 94px;
  max-width: 1368px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0 52px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: column;
    flex-wrap: wrap;
    
    padding: 18px 16px;
  }
`;
