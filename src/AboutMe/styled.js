import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    grid-gap: 72px;
    grid-template-columns: auto 1fr;
    max-width: 1089px;
    max-height: 384px;
    margin: auto;
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
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 32px;
    color: ${({ theme }) =>
        theme.lightTheme.colors.slateGray
    };
`;

export const ExtraContent = styled.div`

`