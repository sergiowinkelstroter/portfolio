import { skills } from "@/constants/skills";
import { SkillComponent } from "../components/SkillComponent";

export default function Skills() {
  return (
    <div
      id="skills"
      className="w-full h-screen flex justify-center  text-center mt-28"
    >
      <div className="max-w-[1240px]  m-auto ">
        <div>
          <h1>Skills</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-12 ">
          {skills.map((skill) => (
            <SkillComponent title={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
