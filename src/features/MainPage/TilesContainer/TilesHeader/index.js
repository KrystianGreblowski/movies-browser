import styled from "styled-components";

export const TilesHeader = styled.h1`
    font-size: 36px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 18px;
        margin-left: 18px;
    }
`;