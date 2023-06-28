import { skills } from "@/constants/skills";
import { SkillComponent } from "./SkillComponent";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full flex justify-center  text-center mt-28"
    >
      <div className="max-w-[1240px]  m-auto ">
        <div className="">
          <h1>Habilidades</h1>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-10 my-12 container">
          {skills.map((skill) => (
            <SkillComponent
              title={skill.name}
              key={skill.name}
              image={skill.image}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
