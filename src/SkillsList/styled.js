import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    background-color: 
        ${({ theme }) => theme.colors.lightMineShaft || theme.colors.white};
    padding: 32px;
    box-shadow:  0px 0px 10px -2px 
        ${({ theme }) => theme.colors.lightViolet || theme.colors.coldViolet};
       
    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
        padding: 16px;
   };
`;

export const Header = styled.h2`
    color: ${({ theme }) => theme.colors.lightThemeMineShaft || theme.colors.white};
    font-size: 30px;
    font-weight: 900;
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid  
        ${({ theme }) => theme.colors.lightIron || theme.colors.lightScienceBlue};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
        font-size: 18px;
    };
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: space-between;
    padding-left: 0px;
    list-style-position: inside;

    @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
        grid-template-columns: repeat(2, auto);
   };

   @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
        grid-template-columns: auto;
   };
`;

export const Item = styled.li`
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.slateGray};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
        font-size: 14px;
    };

    &::marker {
        color: ${({ theme }) => theme.colors.dodgerBlue || theme.colors.scienceBlue};
    };
`;