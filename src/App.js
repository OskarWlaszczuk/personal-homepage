import { AboutMe } from "./AboutMe";
import { HireMeLink } from "./HireMeLink";

function App() {
  return (
    <>
      <AboutMe
        image="
          https://avatars.githubusercontent.com/u/155220171?v=4
        "
        caption="This is"
        header="Oskar Właszczuk"
        description="
          I'm a passionate Frontend Developer in love with React,currently looking for new job opportunities.
        "
        extraContent={<HireMeLink />}
      />
    </>
  );
}

export default App;
