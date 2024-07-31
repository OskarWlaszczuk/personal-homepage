import styled, { css } from "styled-components";

export const LinkWrapper = styled.a`
    max-width: 154px;
    max-height: 49px;
    display: grid;
    grid-template-columns: 
        minmax(auto, 24px)
        minmax(auto, 82px);
    grid-gap: 16px;
    background-color: ${({ theme, $isDarkTheme }) =>
        $isDarkTheme ?
            theme.darkTheme.colors.dodgerBlue :
            theme.lightTheme.colors.scienceBlue
    };
    padding: 12px 16px;
    border: 1px solid ${({ theme }) =>
        theme.lightTheme.colors.lightScienceBlue
    };
    border-radius: 4px;
    text-decoration: none;
    transition: 0.4s;

    &:focus-visible {
        outline: none;
        box-shadow:0px 0px 0px 4px ${({ theme }) =>
        theme.lightTheme.colors.anakiwa
    };
    };

    &:hover {
        box-shadow: 0px 0px 0px 4px ${({ theme }) =>
        theme.lightTheme.colors.anakiwa
    };
    };

    ${({ $withoutIcon }) => $withoutIcon && css`
       display: unset;
       max-width: unset;
       max-height: unset;
    `};
`;

export const LinkText = styled.span`
    color: ${({ theme }) =>
        theme.lightTheme.colors.white
    };
    max-height: 25px;
    text-align: center;
    font-size: 20.06px;
    font-weight: 600;
`;