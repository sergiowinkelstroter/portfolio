import { projectsData } from "@/constants/projects";
import { ProjectItem } from "./ProjectItem";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Projects = () => {
  return (
    <section
      id="projetos"
      className="w-full flex flex-col justify-center text-center mt-10 bg-[#212e40]"
    >
      <div className="max-w-[1240px] flex flex-col m-auto px-2 py-16 w-full ">
        <h1 className="">Projetos</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 mb-6 justify-center items-center container">
          {projectsData.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              image={project.image}
              technologies={project.technologies}
              demo={project.demo}
              repo={project.repo}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 m-auto hover:text-blue-600 transition-colors">
          <Link href={"https://github.com/sergiowinkelstroter"} target="_blank">
            Ver mais projetos
          </Link>
          <AiOutlineArrowRight />
        </div>
      </div>
    </section>
  );
};
