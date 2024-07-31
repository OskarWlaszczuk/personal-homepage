import { Section, Image, Header, Description, Content } from "./styled";
import { Caption } from "../common/Caption";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../themeSlice";

export const AboutMe = ({
  image,
  caption,
  header,
  description,
  extraContent,
}) => {
  const isImageExists = !image;

  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <Section $withoutImage={isImageExists}>
      {!isImageExists && <Image src={image} alt="" />}
      <Content>
        <Caption content={caption} />
        <Header $isDarkTheme={isDarkTheme} $withoutImage={isImageExists}>
          {header}
        </Header>
        <Description $isDarkTheme={isDarkTheme}>{description}</Description>
        <>{extraContent}</>
      </Content>
    </Section>
  );
};
