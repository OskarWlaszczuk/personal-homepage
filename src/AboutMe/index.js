import { Section, Image, Caption, Header, Description, ExtraContent, Content } from "./styled";

export const AboutMe = ({ image, caption, header, description, extraContent }) => {
    const isImageExists = !image;

    return (
        <Section $withoutImage={isImageExists}>
            {!isImageExists && (
                <Image src={image} alt="" />
            )}
            <Content>
                <Caption>{caption}</Caption>
                <Header $withoutImage={isImageExists}>{header}</Header>
                <Description>{description}</Description>
                <ExtraContent>{extraContent}</ExtraContent>
            </Content>
        </Section>
    )
};