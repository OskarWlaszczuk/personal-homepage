import { Section, SectionWithoutImage, Image, Header, HeaderWithoutImage, Description, Content } from "./styled";
import { Caption } from "../common/Caption";
export const AboutMe = ({
  image,
  caption,
  header,
  description,
  extraContent,
}) => {
  const useImageLayout = !!image;

  const SectionComponent = useImageLayout ? Section : SectionWithoutImage;
  const HeaderComponent = useImageLayout ? Header : HeaderWithoutImage;
  const imageElement = useImageLayout && <Image src={image} alt="Oskar Właszczuk" />
  
  return (
    <SectionComponent>
      {imageElement}
      <Content>
        <Caption content={caption} />
        <HeaderComponent>{header}</HeaderComponent>
        <Description>{description}</Description>
        {extraContent}
      </Content>
    </SectionComponent>
  );
};
