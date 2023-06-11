"use client";

import { projectsData } from "@/constants/projects";
import { ProjectItem } from "../components/ProjectItem";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function SectionProjects() {
  return (
    <div
      id="projetos"
      className="w-full flex flex-col justify-center text-center mt-10"
    >
      <div className="max-w-[1240px] flex flex-col m-auto px-2 py-16 w-full ">
        <h1 className="">Projetos</h1>
        <motion.ul
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 mb-6 justify-center items-center container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project) => (
            <motion.li key={project.id} variants={item}>
              <ProjectItem
                title={project.title}
                image={project.image}
                technologies={project.technologies}
                demo={project.demo}
                repo={project.repo}
              />
            </motion.li>
          ))}
        </motion.ul>
        <div className="flex items-center gap-2 m-auto hover:text-blue-600 transition-colors">
          <Link href={"https://github.com/sergiowinkelstroter"} target="_blank">
            Ver mais projetos
          </Link>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
}
