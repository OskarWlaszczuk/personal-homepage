import { AboutMe } from "./AboutMe";
import { HireMeLink } from "./AboutMe/HireMeLink"
import { SkillsList } from "./SkillsList";
import { currentSkillList } from "./currentSkillsList";
import { futureSkillsList } from "./futureSkillsList";

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
      <SkillsList
        header="What I want to learn next 🚀"
        skills={futureSkillsList}
      />
      <AboutMe
        caption="Let's talk!"
        header="oskarwlaszczuk@gmail.com"
        description={<>
          I'm always open to new projects. If you have a website, dashboard, or app in mind and need help bringing your ideas to life, feel free to contact me. 👊
        </>}
        extraContent={<HireMeLink />}
      />
    </>
  );
}

export default App;
