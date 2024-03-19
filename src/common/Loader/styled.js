import styled, { keyframes } from "styled-components";

const spinning = keyframes`
    to{transform: rotate(1turn)}
`;

export const CircleLoader = styled.img`
    width: 91px;
    height: 91px;
    animation: ${spinning} 1s infinite linear;
`;

export const CircleWrapper = styled.div`
    text-align: center;
    margin-top: 50px;
`;
