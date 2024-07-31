import { useSelector } from "react-redux";
import { LinkWrapper, LinkText } from "./styled";
import { selectIsDarkTheme } from "../../themeSlice";

export const LinkBox = ({ href, text, Icon }) => {
    const isIconExists = !Icon
    const isDarkTheme = useSelector(selectIsDarkTheme);
    return (
        <LinkWrapper
            $withoutIcon={isIconExists}
            href={href}
            $isDarkTheme={isDarkTheme}
        >
            {!isIconExists && (
                Icon
            )}
            <LinkText>{text}</LinkText>
        </LinkWrapper>
    )
};