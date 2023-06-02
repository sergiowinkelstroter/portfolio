import { ProjectItem } from "./ProjectItem";
import GaleriaImage from "/public/assets/galeria.png";
import PearsonHardmanImage from "/public/assets/pearsonHardam.png";
import CoffeeDeliveryImage from "/public/assets/CapaCoffeeDelivery.png";
import GitHubBlogImage from "/public/assets/GitHubCapa.png";
import TaskListImage from "/public/assets/tasklistcapa.png";
import IgniteTimerImage from "/public/assets/Ignite-timer.png";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { v4 as uuid } from "uuid";

const data = [
  {
    id: uuid(),
    title: "Coffee Delivery",
    image: CoffeeDeliveryImage,
    technologies: ["ReactJS", "Styled-Components", "TypeScript"],
    repo: "https://github.com/sergiowinkelstroter/coffee-delivery",
    demo: "https://coffee-delivery-rho-ten.vercel.app/",
  },
  {
    id: uuid(),
    title: "ToDo List",
    image: TaskListImage,
    technologies: ["ReactJS", "CSS", "TypeScript"],
    repo: "https://github.com/sergiowinkelstroter/ToDo-List",
    demo: "https://todo-list-ignitee.vercel.app/",
  },

  {
    id: uuid(),
    title: "GitHub Blog",
    image: GitHubBlogImage,
    technologies: ["ReactJS", "TailwindCSS", "TypeScript"],
    repo: "https://github.com/sergiowinkelstroter/github-blog",
    demo: "https://github-blog-roan.vercel.app/",
  },
  {
    id: uuid(),
    title: "Ignite Timer",
    image: IgniteTimerImage,
    technologies: ["ReactJS", "TypeScript", "Styled-Components"],
    repo: "https://github.com/sergiowinkelstroter/ignite-timer",

    demo: "https://ignite-timer-gray.vercel.app/",
  },
  {
    id: uuid(),
    title: "Pearson Hardman",
    image: PearsonHardmanImage,
    technologies: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/sergiowinkelstroter/FrontWeek-PearsonHardman",
    demo: "https://pearson-hardman-winkelstrotersergio.vercel.app/",
  },
  {
    id: uuid(),
    title: "Galeria de fotos",
    image: GaleriaImage,
    technologies: ["ReactJS", "TypeScript", "Firebase", "Styled-Components"],
    repo: "https://github.com/sergiowinkelstroter/gallery",
    demo: "https://gallery-tan-nu.vercel.app/",
  },
];

export const SectionProjects = () => {
  return (
    <div
      id="projetos"
      className="w-full flex mt-32 flex-col justify-center  text-center"
    >
      <div className="max-w-[1240px] flex flex-col m-auto px-2 py-16 w-full ">
        <h1 className="">Projetos</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 mb-6 justify-center items-center">
          {data.map((project) => (
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
    </div>
  );
};
