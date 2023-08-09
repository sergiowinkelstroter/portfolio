import {
  projectsJS,
  projectsNext,
  projectsReact,
  projectsVue,
} from "@/constants/projects";
import { ProjectItem } from "./ProjectItem";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import * as Tabs from "@radix-ui/react-tabs";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";

export const Projects = () => {
  return (
    <section
      id="projetos"
      className="w-full flex flex-col justify-center text-center mt-10 bg-[#212e40]"
    >
      <div className="max-w-[1100px] flex flex-col m-auto py-16 w-full ">
        <h1 className="">Projetos</h1>
        <Tabs.Root defaultValue="js-vanilla">
          <Tabs.List className="flex justify-center md:justify-start gap-6  mt-10">
            <Tabs.Trigger
              value="js-vanilla"
              className="flex items-center gap-3 justify-center text-sm md:text-base md:w-28 md:p-2 border-b-2  data-[state='active']:border-b-blue-600 data-[state='inactive']:border-b-transparent hover:text-blue-600 hover:transition-colors "
            >
              <IoLogoJavascript /> <span>Vanilla</span>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="react"
              className="flex items-center gap-3 justify-center text-sm md:text-base md:w-28 md:p-2 border-b-2  data-[state='active']:border-b-blue-600 data-[state='inactive']:border-b-transparent hover:text-blue-600 hover:transition-colors "
            >
              <DiReact />
              <span> React.js</span>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="next"
              className="flex items-center gap-3 justify-center text-sm md:text-base md:w-28 md:p-2 border-b-2  data-[state='active']:border-b-blue-600 data-[state='inactive']:border-b-transparent hover:text-blue-600 hover:transition-colors "
            >
              <SiNextdotjs />
              <span>Next.js</span>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="vue"
              className="flex items-center gap-3 justify-center text-sm md:text-base md:w-28 md:p-2 border-b-2  data-[state='active']:border-b-blue-600 data-[state='inactive']:border-b-transparent hover:text-blue-600 hover:transition-colors "
            >
              <FaVuejs />
              <span>Vue.js</span>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="js-vanilla">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 mb-6 justify-center items-center container">
              {projectsJS.map((project) => (
                <ProjectItem
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  technologies={project.technologies}
                  demo={project.demo}
                  repo={project.repo}
                  description={project.description}
                />
              ))}
            </div>
          </Tabs.Content>
          <Tabs.Content value="react">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 mb-6 justify-center items-center container">
              {projectsReact.map((project) => (
                <ProjectItem
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  technologies={project.technologies}
                  demo={project.demo}
                  repo={project.repo}
                  description={project.description}
                />
              ))}
            </div>
          </Tabs.Content>
          <Tabs.Content value="next">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 mb-6 justify-center items-center container">
              {projectsNext.map((project) => (
                <ProjectItem
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  technologies={project.technologies}
                  demo={project.demo}
                  repo={project.repo}
                  description={project.description}
                />
              ))}
            </div>
          </Tabs.Content>
          <Tabs.Content value="vue">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 mb-6 justify-center items-center container">
              {projectsVue.map((project) => (
                <ProjectItem
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  technologies={project.technologies}
                  demo={project.demo}
                  repo={project.repo}
                  description={project.description}
                />
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>

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
