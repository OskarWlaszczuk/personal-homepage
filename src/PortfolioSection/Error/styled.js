import styled from "styled-components";

export const Title = styled.h3`
    color: ${({ theme }) =>
        theme.colors.lightThemeMineShaft ||
        theme.colors.white
    };
    font-size: 24px;
    font-weight: 700;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
        font-size: 18px;
    };
`;