"use client";

import Image, { StaticImageData } from "next/image";

interface ProjectItemProps {
  title: string;
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
  demo,
}: ProjectItemProps) => {
  return (
    <div
      className="group m-auto relative my-10 flex flex-col  rounded-xl items-center hover:scale-105 ease-in duration-300 hover:cursor-pointer
    "
    >
      <Image src={image} alt="" width={300} height={300} />
      <span className="mt-1 translate-y-0 transform opacity-100 transition-all group-hover:translate-y-8 group-hover:opacity-0">
        {technologies.join(", ")}
      </span>
      <div className="flex justify-between mt-4 w-[320px] items-center  md:flex-row px-4 translate-y-10 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
        <a
          target="_blank"
          href={demo}
          className="text-base hover:text-blue-600"
        >
          {title}
        </a>
        <div className="bg-blue-600 p-2 w-20 text-sm text-center h-10 font-semibold rounded-xl border border-transparent  hover:bg-[#1f2937] hover:transition-colors hover:border-blue-600">
          <a target="_blank" rel="noreferrer" href={repo}>
            Ver mais
          </a>
        </div>
      </div>
    </div>
  );
};
