import styled from "styled-components";
import { ReactComponent as LightThemeOnButton }
    from "../svgs/LightThemeOnButton.svg";
import { ReactComponent as DarkThemeOnButton }
    from "../svgs/DarkThemeOnButton.svg";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 12px;
    align-items: center;
    justify-self: end;
`;

export const StyledLightThemeOnButton = styled(LightThemeOnButton)`
   cursor: pointer;
`;

export const StyledDarkThemeOnButton = styled(DarkThemeOnButton)`
   cursor: pointer;
`;