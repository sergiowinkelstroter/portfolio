import { SkillComponent } from "./SkillComponent";
import CssImage from "/public/skills/css.png";
import HTMLImage from "/public/skills/html.png";
import TypescriptImage from "/public/skills/typescript.png";
import FirebaseImage from "/public/skills/firebase.png";
import GithubImage from "/public/skills/github1.png";
import JSImage from "/public/skills/javascript.png";
import ReactImage from "/public/skills/react.png";
import NextImage from "/public/skills/nextjs-logo.png";
import TailwindImage from "/public/skills/tailwind.png";
import StyledComponentsImage from "/public/skills/styled-components.png";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full flex justify-center  text-center"
    >
      <div className="max-w-[1240px]  m-auto ">
        <div>
          <h1>Skills</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-12 ">
          <SkillComponent title={"HTML"} image={HTMLImage} />
          <SkillComponent title={"CSS"} image={CssImage} />
          <SkillComponent title={"Javascript"} image={JSImage} />
          <SkillComponent title={"Typescript"} image={TypescriptImage} />
          <SkillComponent title={"React.js"} image={ReactImage} />
          <SkillComponent title="Next.js" image={NextImage} />
          <SkillComponent title={"TailwindCSS"} image={TailwindImage} />
          <SkillComponent title={"GitHub"} image={GithubImage} />
          <SkillComponent title={"Firebase"} image={FirebaseImage} />
          <SkillComponent
            title="Styled-Components"
            image={StyledComponentsImage}
          />
        </div>
      </div>
    </div>
  );
};
