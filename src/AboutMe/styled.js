import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 1089px;
    max-height: 384px;
    margin: auto;
    background-color: blue; 
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
    color: ${({ theme }) =>
        theme.lightTheme.colors.mineShaft
    };
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) =>
        theme.lightTheme.colors.slateGray
    };
`;

export const ExtraContent = styled.div`

`