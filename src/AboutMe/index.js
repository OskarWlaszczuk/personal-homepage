import { Section, Image, Header, Description, Content } from "./styled";
import { Caption } from "../common/Caption";
export const AboutMe = ({
  image,
  caption,
  header,
  description,
  extraContent,
}) => {
  const isImageExists = !image;

  return (
    <Section $withoutImage={isImageExists}>
      {!isImageExists && <Image src={image} alt="" />}
      <Content>
        <Caption content={caption} />
        <Header $withoutImage={isImageExists}>
          {header}
        </Header>
        <Description>{description}</Description>
        {extraContent}
      </Content>
    </Section>
  );
};
