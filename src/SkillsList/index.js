import { nanoid } from "nanoid"
import { Section, Header, List, Item } from "./styled"
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../themeSlice";

export const SkillsList = ({ header, skills }) => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <Section $isDarkTheme={isDarkTheme}>
            <Header $isDarkTheme={isDarkTheme}>{header}</Header>
            <List>
                {skills.map(skill =>
                    <Item $isDarkTheme={isDarkTheme} key={nanoid()}>{skill}</Item>
                )}
            </List>
        </Section>
    );
};