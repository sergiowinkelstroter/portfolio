"use client";

import { skills } from "@/constants/skills";
import { SkillComponent } from "../components/SkillComponent";
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

export default function Skills() {
  return (
    <div
      id="skills"
      className="w-full h-screen flex justify-center  text-center mt-28"
    >
      <div className="max-w-[1240px]  m-auto ">
        <div className="">
          <h1>Habilidades</h1>
        </div>
        <motion.ul
          className="grid grid-cols-2 md:grid-cols-4 gap-10 my-12 container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill) => (
            <motion.li key={skill.name} variants={item}>
              <SkillComponent title={skill.name} image={skill.image} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
