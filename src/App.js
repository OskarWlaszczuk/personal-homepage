import { AboutMe } from "./AboutMe";
import { HireMeLink } from "./AboutMe/HireMeLink"
import { SkillsList } from "./SkillsList";
import { currentSkillList } from "./SkillsList/currentSkillsList";

function App() {
  return (
    <>
      <AboutMe
        image="
          https://avatars.githubusercontent.com/u/155220171?v=4
        "
        caption="This is"
        header="Oskar Właszczuk"
        description={<>
          I'm a passionate Frontend Developer in love with React,
          <br />currently looking for new job opportunities.
        </>}
        extraContent={<HireMeLink />}
      />
      <SkillsList
        header="My skillset includes 🛠️"
        skills={currentSkillList}
      />
    </>
  );
}

export default App;
