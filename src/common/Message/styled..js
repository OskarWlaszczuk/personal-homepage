import styled from "styled-components";

export const StyledMessage = styled.p`
   color: ${({ theme }) => theme.colors.mineShaft};
    font-size: 20px;
    font-weight: 400;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
        font-size: 17px;
    };
`;