import styled from "styled-components";

export const Container = styled.div`
    margin: 88px 0;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 32px;   
`;
export const Title = styled.h3`
    font-size: 24px;
    font-weight: 700;
    margin: 0;
`;

export const Description = styled.p`
    color: ${({ theme }) =>
        theme.lightTheme.colors.mineShaft
    };
    font-size: 20px;
    font-weight: 400;
    margin: 0;
`;