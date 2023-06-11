"use client";

import Image from "next/image";
import ContactImage from "/public/contact.jpg";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
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

export default function Contact() {
  return (
    <div
      id="contato"
      className="w-full flex flex-col justify-center  text-center mt-10"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <h1>Contato</h1>

        <div className="flex flex-col  md:grid md:grid-cols-2 mt-12">
          <Image src={ContactImage} className="rounded-lg" alt="" />
          <motion.ul
            className="flex flex-col items-center justify-center mt-10 md:mt-0 container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.li
              className="w-[250px] flex items-center mb-12"
              variants={item}
            >
              <BsTelephone size={28} />
              <div className="ml-4 text-start">
                <p className="text-xl font-black">Telefone</p>
                <p>(99) 99152-9825</p>
              </div>
            </motion.li>
            <motion.li
              className="w-[250px] flex items-center mb-12"
              variants={item}
            >
              <FiMail size={28} />
              <div className="ml-4 text-start">
                <p className="text-xl font-black">Email</p>
                <p>winksousa0@gmail.com</p>
              </div>
            </motion.li>
            <motion.li className="w-[250px] flex items-center " variants={item}>
              <GoLocation size={28} />
              <div className="ml-4 text-start">
                <p className="text-xl font-black">Localização</p>
                <p>Brasil - Açailandia, Maranhão</p>
              </div>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
