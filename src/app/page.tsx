"use client";

import { Main } from "./components/Main";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";

import { useEffect, useState } from "react";
import { TopButton } from "./components/TopButton";

export default function Home() {
  const [topButton, setTopButton] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 80) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {topButton && <TopButton />}
    </>
  );
}
