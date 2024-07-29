import styled from "styled-components"
import { ReactComponent as LoadingIcon } from "../../svgs/LoadingIcon.svg"

export const StyledLoadingIcon = styled(LoadingIcon)`
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
        width: 80px;
        height: 80px;
    };

`;