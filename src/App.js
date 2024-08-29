import { AboutMe } from "./AboutMe";
import { LinkBox } from "./common/LinkBox";
import { SocialMediaIconsBar } from "./SocialMediaIconsBar";
import { SkillsList } from "./SkillsList";
import { PortfolioSection } from "./PortfolioSection";
import { currentSkillList } from "./currentSkillsList";
import { futureSkillsList } from "./futureSkillsList";
import { StyledMessageIcon } from "./StyledMessageIcon";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { useState } from "react";
import { lightTheme } from "./theme";
import { darkTheme } from "./theme";

import { ToggleThemeButton } from "./ToggleThemeButton";
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ToggleThemeButton isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <AboutMe
        image="https://avatars.githubusercontent.com/u/155220171?v=4"
        caption="This is"
        header="Oskar Właszczuk"
        description={
          <>
            👨🏻💻 I'm a passionate Frontend Developer, enjoying building and
            designing new projects with React and CSS.
          </>
        }
        extraContent={
          <LinkBox
            text="Hire Me"
            href="mailto:oskarwlaszczuk@gmail.com"
            Icon={<StyledMessageIcon />}
          />
        }
      />
      <SkillsList header="My skillset includes 🛠️" skills={currentSkillList} />
      <SkillsList
        header="What I want to learn next 🚀"
        skills={futureSkillsList}
      />
      <PortfolioSection />
      <AboutMe
        caption="Let's talk!"
        header="oskarwlaszczuk@gmail.com"
        description={
          <>
            I'm always open to new projects.If you have a website, dashboard, or
            app in mind and need help bringing your ideas to life, feel free to
            contact me. ✌
          </>
        }
        extraContent={<SocialMediaIconsBar />}
      />
    </ThemeProvider>
  );
}

export default App;
