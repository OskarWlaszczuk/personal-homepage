import { Wrapper, Image, Caption, Header, Description, ExtraContent } from "./styled";

export const AboutMe = (
    { image, caption, header, description, extraContent }
) => (
    <Wrapper>
        <Image src={image} alt="" />
        <Caption>{caption}</Caption>
        <Header>{header}</Header>
        <Description>{description}</Description>
        <ExtraContent>{extraContent}</ExtraContent>
    </Wrapper>
);