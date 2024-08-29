import { Section, Header, List, Item } from "./styled";

export const SkillsList = ({ header, skills }) => {

    const renderSkillsList = () => {
        return skills.map(skill =>
            <Item key={skill}>{skill}</Item>
        );
    };

    return (
        <Section>
            <Header>{header}</Header>
            <List>{renderSkillsList()}</List>
        </Section>
    );
};