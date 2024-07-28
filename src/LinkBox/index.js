import { LinkWrapper, LinkText } from "./styled";

export const LinkBox = ({ href, text, Icon }) => {
    const isIconExists = !Icon

    return (
        <LinkWrapper
            $withoutIcon={isIconExists}
            target="_blank"
            href={href}
        >
            {!isIconExists && (
                Icon
            )}
            <LinkText>{text}</LinkText>
        </LinkWrapper>
    )
};