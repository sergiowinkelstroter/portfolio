"use client";
import Image from "next/image";
import perfilImg from "/public/assets/home_img.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      id="about"
      className="w-full flex justify-center text-center mt-28 mb-6 md:mb-0"
    >
      <div className="max-w-[1240px] m-auto ">
        <div className="mb-12">
          <h1>Sobre mim</h1>
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className="flex items-center justify-center">
            <Image
              src={perfilImg}
              alt=""
              width={300}
              height={200}
              className="rounded-md "
            />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 40,
            }}
            className="mt-10 px-4 flex flex-col gap-6 items-center container"
          >
            <p className="text-start text-sm md:text-base">
              Olá! Sou Sergio Winkelstroter, desenvolvedor Front-end. Dei meus
              primeiros passos nessa área quando ingressei na faculdade de
              Sistemas para Internet. Durante essa trajetória, não me limitei
              apenas à sala de aula. Fiz diversos cursos online, participei de
              eventos virtuais e me envolvi em projetos. Essas experiências me
              proporcionaram a oportunidade de aplicar meus conhecimentos em
              situações reais, fortalecendo minha base de habilidades em
              desenvolvimento web.
            </p>
            <a
              download
              href="/CV.pdf"
              className="mt-6 bg-blue-600 p-2 w-44 text-center font-semibold rounded-3xl border border-transparent hover:bg-[#1f2937] hover:transition-colors hover:border-blue-600"
            >
              Baixar curriculo
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
