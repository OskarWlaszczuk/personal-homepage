import { Section, Image, Caption, Header, Description, ExtraContent, Content } from "./styled";

export const AboutMe = (
    { image, caption, header, description, extraContent }
) => (
    <Section $withoutImage>
        {image && (
            <Image src={image} alt="" />
        )}
        <Content>
            <Caption>{caption}</Caption>
            <Header>{header}</Header>
            <Description>{description}</Description>
            <ExtraContent>{extraContent}</ExtraContent>
        </Content>
    </Section>
);