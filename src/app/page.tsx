"use client";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { SectionProjects } from "./components/SectionProjects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />
      <SectionProjects />
      <Contact />
      <Footer />
    </>
  );
}
