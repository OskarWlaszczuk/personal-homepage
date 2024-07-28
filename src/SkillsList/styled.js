import styled from "styled-components";

export const Section = styled.section`
    background-color: ${({ theme }) =>
        theme.lightTheme.colors.white
    };
    width: 100%;
    padding: 32px;
    box-shadow: 0px 16px 58px 0px #090A3308;
`;

export const Header = styled.h2`
    color: ${({ theme }) =>
        theme.lightTheme.colors.mineShaft
    };
    font-size: 30px;
    font-weight: 900;
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) =>
        theme.lightTheme.colors.iron
    };
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: space-between;
    padding-left: 0px;
    list-style-position: inside;
    color: #0366D6;
`;

export const Item = styled.li`
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) =>
        theme.lightTheme.colors.slateGray
    };

    &::marker {
        color: ${({ theme }) =>
        theme.lightTheme.colors.scienceBlue
    };
    };
`;