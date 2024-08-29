import { LinkWrapper, LinkWrapperWithoutIcon, LinkText } from "./styled";

export const LinkBox = ({ href, text, Icon }) => {
    const isIconExists = !!Icon

    const LinkWrapperComponent = isIconExists ? LinkWrapper : LinkWrapperWithoutIcon;
    const iconElement = isIconExists && Icon;

    return (
        <LinkWrapperComponent href={href}>
            {iconElement}
            <LinkText>{text}</LinkText>
        </LinkWrapperComponent>
    );
};