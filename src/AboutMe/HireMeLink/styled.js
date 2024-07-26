import styled from "styled-components";
import { ReactComponent as MessageIcon } from "../../Message.svg"

export const LinkWrapper = styled.a`
    max-width: 154px;
    max-height: 49px;
    display: grid;
    grid-template-columns: 
        minmax(auto, 24px)
        minmax(auto, 82px);
    grid-gap: 16px;
    background-color: ${({ theme }) =>
        theme.lightTheme.colors.scienceBlue
    };
    padding: 12px 16px;
    border: 1px solid ${({ theme }) =>
        theme.lightTheme.colors.lightScienceBlue
    };
    border-radius: 4px;
    text-decoration: none;

    &:focus {
        box-shadow: 0px 0px 0px 2px ${({ theme }) =>
        theme.lightTheme.colors.anakiwa
    };;
    };
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

export const StyledMessageIcon = styled(MessageIcon)`
    max-height: 24px;
`;