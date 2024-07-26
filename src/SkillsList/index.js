import { nanoid } from "nanoid"
import { Section, Header, List, Item } from "./styled"

export const SkillsList = ({ header, skills }) => (
    <Section>
        <Header>{header}</Header>
        <List>
            {skills.map(skill =>
                <Item key={nanoid()}>{skill}</Item>
            )}
        </List>
    </Section>
)