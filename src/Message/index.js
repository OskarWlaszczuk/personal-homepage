import styled from "styled-components";

export const Message = styled.p`
    color: ${({ theme }) =>
        theme.lightTheme.colors.mineShaft
    };
    font-size: 20px;
    font-weight: 400;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
        font-size: 17px;
    };
`;