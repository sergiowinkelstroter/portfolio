"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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

export default function Home() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <div className="mb-14 ">
          <h1 className="mb-1 font-mono text-3xl  md:text-6xl">
            Olá, eu <br className="block md:hidden" />
            <span>sou o Sergio 👋</span>
          </h1>
          <div className="text-lg font-semibold md:text-3xl">
            Desenvolvedor <span className="text-blue-600">Front-end</span>
          </div>
        </div>
        <div>
          <motion.ul
            className="flex gap-4 container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={item} className="hover:text-blue-600">
              <a
                href="https://github.com/sergiowinkelstroter"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size={32} />
              </a>
            </motion.li>
            <motion.li variants={item} className="hover:text-blue-600">
              <a
                href="https://www.linkedin.com/in/sergio-winkelstroter/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin size={32} />
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
