import styled from "styled-components";

export const TilesContainer = styled.article`
  width: 100%;
  margin: 0 auto;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr) ;
  grid-gap: 24px;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.narrow}) {
    grid-template-columns: repeat(3, 324px) ;
     }

 @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(2, 324px) ;
  }
 
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: auto;
    margin-bottom: 16px;
  }
 
  
`;
