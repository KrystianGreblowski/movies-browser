import styled from "styled-components";

export const Tiles = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        flex-direction: column;
        align-items: center;
        margin-top: 0px;
    }
`;

export const Tile = styled.article`
    background-color: ${({ theme }) => theme.color.white};
    max-width: 324px;
    height: 650px;
    box-shadow: 0px 4px 12px 0px #BAC7D580;
    padding: 16px;
    display: grid;
    grid-template-rows: auto 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        max-width: 320px;
        grid-template-columns: 1fr auto;
        height: 201px;
    }
`;

export const Image = styled.img`
    max-width: 292px;
    height: 434px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        max-width: 114px;
        height: 169px;
    }
`;



export const Description = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
    }
`;

export const MovieTitle = styled.h1`
    margin-top: 16px;
    font-size: 22px;
    font-weight: 500;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        margin-top: 0px;
        margin-bottom: 0px;
    }
`;

export const MovieYear = styled.p`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    margin-top: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        margin-top: 4px;
        margin-bottom: 0px;
    }
`;

export const MovieTypes = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        margin-top: 8px;
    }
`;

export const MovieType = styled.li`
    background-color: ${({ theme }) => theme.color.mystic};
    padding: 8px 16px 8px 16px;
    border-radius: 5px;
    font-size: 14px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 4px 8px 4px 8px;
        font-size: 10px;
    }
`;

export const Rating = styled.div`
    display: flex;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        
    }
`;

export const StarImage = styled.img`
    max-width: 24px;
    height: 23px;
    margin-top: 12px;
`;

export const Rate = styled.p`
    font-size: 16px;
    font-weight: 600;
`;

export const Votes = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.color.waterloo};
`;