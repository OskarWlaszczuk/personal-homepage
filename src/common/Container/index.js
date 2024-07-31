import styled from "styled-components";

export const Container = styled.div`
    margin: 88px 0;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 32px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
        margin: 48px 0;
    };
`;