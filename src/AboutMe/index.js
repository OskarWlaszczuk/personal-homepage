import { Wrapper, Image, Caption, Header, Description, ExtraContent, Content } from "./styled";

export const AboutMe = (
    { image, caption, header, description, extraContent }
) => (
    <Wrapper>
        <Image src={image} alt="" />
        <Content>
            <Caption>{caption}</Caption>
            <Header>{header}</Header>
            <Description>{description}</Description>
            <ExtraContent>{extraContent}</ExtraContent>
        </Content>
    </Wrapper>
);