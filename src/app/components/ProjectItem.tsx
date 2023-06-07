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
      <div className="flex justify-between mt-4 w-full items-center  md:flex-row px-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
        <a target="_blank" href={demo} className="text-base">
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
