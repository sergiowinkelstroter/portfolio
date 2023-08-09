"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Image, { StaticImageData } from "next/image";
import { ProjectModal } from "./ProjectModal";

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  repo: string;
  image: StaticImageData;
  demo: string;
}

export const ProjectItem = ({
  title,
  technologies,
  repo,
  image,
  description,
  demo,
}: ProjectItemProps) => {
  return (
    <div
      className="m-auto my-10 flex flex-col w-[300px]    rounded-xl items-center hover:scale-105 ease-in duration-300 hover:cursor-pointer border-b-2 border-b-blue-600
    "
    >
      <Image src={image} alt="" width={300} height={300} />
      <div className="bg-[#1f2937] w-full flex flex-col justify-between p-4 rounded-b-md ">
        <span className="mt-1 text-xs">{technologies.join(", ")}</span>
        <div className="flex justify-between mt-4 items-center  md:flex-row px-4">
          <a
            target="_blank"
            href={demo}
            className="text-base hover:text-blue-600"
          >
            {title}
          </a>
          <Dialog.Root>
            <Dialog.Trigger className="bg-blue-600 p-2 w-20 text-sm text-center h-10 font-semibold rounded-xl border border-transparent  hover:bg-[#1f2937] hover:transition-colors hover:border-blue-600">
              Ver mais
            </Dialog.Trigger>
            <ProjectModal
              demo={demo}
              description={description}
              image={image}
              repo={repo}
              technologies={technologies}
              title={title}
            />
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
};
