import styled from "styled-components";

export const Title = styled.h3`
   color: ${({ theme, $isDarkTheme }) =>
        !$isDarkTheme &&
        theme.lightTheme.colors.mineShaft
    };
    font-size: 24px;
    font-weight: 700;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
        font-size: 18px;
    };
`;