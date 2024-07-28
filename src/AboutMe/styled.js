import styled, { css } from "styled-components";

export const Section = styled.section`
    display: grid;
    grid-gap: 72px;
    grid-template-columns: auto 1fr;
    max-width: 1089px;
    max-height: 384px;
    margin: auto;

    ${({ $withoutImage }) => $withoutImage && css`
        margin: 0px;
        grid-gap: 0px;
        justify-self: baseline;
    `};
`;

export const Content = styled.article`
    align-self: center;
`;

export const Image = styled.img`
    max-width: 398px;
    max-height: 398px;
    border-radius: 50%;
`;

export const Caption = styled.header`
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) =>
        theme.lightTheme.colors.slateGray
    };
`;

export const Header = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 12px 36px 0 0;
    color: ${({ theme }) =>
        theme.lightTheme.colors.mineShaft
    };
    transition: 0.5s;


    ${({ $withoutImage }) => $withoutImage && css`
        &:hover {
            color: ${({ theme }) =>
            theme.lightTheme.colors.scienceBlue
        };
        };
    `};
`;

export const Description = styled.p`
    max-width: 670px;
    font-size: 20px;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 32px;
    color: ${({ theme }) =>
        theme.lightTheme.colors.slateGray
    };
`;