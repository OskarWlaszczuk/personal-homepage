import { Section, Header, List, Item } from "./styled";

export const SkillsList = ({ header, skills }) => {
    return (
        <Section>
            <Header>{header}</Header>
            <List>
                {skills.map(skill =>
                    <Item key={skill}>{skill}</Item>
                )}
            </List>
        </Section>
    );
};